"use client";

import React, { useState } from "react";
import { z } from "zod";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useSession } from "next-auth/react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toast } from "@/hooks/use-toast";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/landingpage/section-heading";
import { CustomButton } from "./custom-button";
import { cn } from "@/lib/utils";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FormInput } from "./form-input";
import { useDao } from "@/hooks/use-dao";
import { useContract } from "@/hooks/use-contract";
import uploadFile from "@/utils/upload-file";
import { useFormik } from "formik";
import DAOForm from "./Form";

export const inviteSchema = z.object({
  inviteCode: z.string().min(6, "Invite code must be at least 6 characters"),
});

interface Props {
  inviteCode: string;
  children: React.ReactNode;
}

const DaoInitForm: React.FC<Props> = ({ inviteCode, children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdDaoId, setCreatedDaoId] = useState(null);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);

  const { account, connected } = useWallet();
  const { status } = useSession();
  const { createDao, updateDaoValue } = useDao();
  const contract = useContract();

  const [scope, animate] = useAnimate();
  const [verified, setVerified] = useState(false);
  const [invite, setInvite] = useState(inviteCode);

  const formik = useFormik<{ inviteCode: string }>({
    initialValues: {
      inviteCode,
    },
    validationSchema: toFormikValidationSchema(inviteSchema),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const isValid = true;
        setVerified(isValid);
        if (isValid) {
          setInvite(values.inviteCode);
          animate(scope.current, { marginTop: 0 });
        } else {
          toast({
            title: "Invalid Invite Code",
            description: "Please check your code and try again",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Checking Invite Code",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleCreateDao = async (finalData: any) => {
    setIsLoading(true);

    try {
      let logoUrl = "";
      if (finalData.logoFile) {
        logoUrl = await uploadFile(finalData.logoFile);
      }

      const daoData = {
        ...finalData,
        logoUrl,
        creatorAddress: account?.address,
      };

      const createdDao = await createDao(daoData, invite);

      if (!createdDao) {
        throw new Error("Failed to create DAO record");
      }

      const contractResponse = await contract.createDao({
        fundName: daoData.fundName,
        ticker: daoData.fundTicker,
        description: daoData.fundDescription,
        daoId: createdDao.id,
      });

      if (!contractResponse) {
        throw new Error("Transaction failed");
      }

      const daoCreationEvent = contractResponse.events.find((event) =>
        event.type.includes("DaoCreationEvent")
      );

      if (!daoCreationEvent) {
        throw new Error("DAO creation event not found");
      }

      const { dao_coin, dao_object_address } = daoCreationEvent.data;

      const updatedDao = await updateDaoValue(createdDao.id, {
        treasuryAddress: dao_coin.inner,
        daoCoinAddress: dao_object_address,
      });

      if (!updatedDao) {
        throw new Error("Failed to update DAO with blockchain addresses");
      }

      setCreatedDaoId(updatedDao.id);
      setPosterUrl(logoUrl);
      setIsModalOpen(true);
    } catch (error) {
      toast({
        title: "Failed to create DAO",
        description: (error as Error).message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDashboard = () => {
    if (createdDaoId) {
      router.push(`/dashboard/${createdDaoId}`);
    }
  };

  return (
    <>
      <div
        className={"flex-1 space-y-2 md:space-y-4 mt-10 min-w-sm max-w-md"}
        ref={scope}
      >
        <SectionHeading subheading="Enter your invite code">
          Create Fund Today
        </SectionHeading>
        {!verified ? (
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <FormInput
              name="inviteCode"
              placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"
              formik={formik}
              disabled={verified || isLoading}
              showLabel={false}
            />

            <CustomButton
              type="submit"
              height="tall"
              disabled={status !== "authenticated" || !connected || isLoading}
              className={cn(
                "transition-all duration-200",
                (status !== "authenticated" || !connected || isLoading) &&
                  "opacity-70 cursor-not-allowed"
              )}
              textClassName="text-md font-bold font-black"
            >
              {isLoading
                ? "Checking..."
                : !connected
                ? "Please Connect Your Wallet"
                : status === "authenticated"
                ? "Check Eligibility"
                : "Please Sign in With Twitter"}
            </CustomButton>
          </form>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={verified.toString()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <DAOForm onSubmit={handleCreateDao} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <AnimatePresence>
        {verified && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            className="flex-1 hidden md:block m-0! min-w-96"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <ModalBody>
          <ModalContent>
            <h3 className="text-2xl font-semibold mb-4">
              Fund Created Successfully!
            </h3>
            {posterUrl && (
              <div className="relative overflow-hidden z-40 bg-white flex flex-col items-start justify-start h-64 w-full mx-auto rounded-md mb-6">
                <div className="relative w-full h-full">
                  <Image
                    src={posterUrl}
                    alt="Fund Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            )}
            <p className="mb-6 text-gray-600">
              Your fund has been created and is now ready for use. You can
              manage your fund from the dashboard.
            </p>
            <CustomButton
              onClick={handleViewDashboard}
              height="tall"
              className="w-full"
            >
              Go to Fund Dashboard
            </CustomButton>
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DaoInitForm;
