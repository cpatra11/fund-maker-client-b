"use client";

import React, { Suspense } from "react";
import DaoInitForm from "@/components/modules/dao-create-form";
import { useSearchParams } from "next/navigation";
import DAOTokenHolderGuide from "@/components/modules/help";
import Loading from "@/components/modules/loading";

const CreateDao = () => {
  const searchParams = useSearchParams();
  const paramInvite = searchParams.get("invite") || "";

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <DaoInitForm inviteCode={paramInvite}>
          <DAOTokenHolderGuide />
        </DaoInitForm>
      </div>
    </main>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CreateDao />
    </Suspense>
  );
};

export default Page;
