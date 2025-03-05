import aptos from "@/lib/aptos";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { type MoveStructId } from "@aptos-labs/ts-sdk";
import type { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { useToast } from "./use-toast";
import { DaoData } from "@/validation/dao.validation";
import { RESOURCES, TYPE_FUN_ARGUMENTS } from "@/constants/contract";
import { useState } from "react";

interface IDaoData extends DaoData {
  merkle?: { root: string; proof: string; limit: string };
}

const useContract = () => {
  const { toast } = useToast();
  const { signAndSubmitTransaction, connected } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const MODULE_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS;
  const MODULE_NAME = process.env.NEXT_PUBLIC_MODULE_NAME || "moonner_dao";

  const executeTransaction = async (
    funString: MoveStructId,
    typeArguments: string[],
    funArguments: any[] = [],
    onSuccess?: () => void
  ) => {
    if (!connected) {
      toast({
        title: "Error Connecting Wallet",
        description: "Please connect your wallet to perform this action.",
        variant: "destructive",
      });
      return;
    }

    const transaction: InputTransactionData = {
      data: {
        function: funString,
        typeArguments: typeArguments,
        functionArguments: funArguments,
      },
    };

    try {
      const response = await signAndSubmitTransaction(transaction);
      const trx = await aptos.waitForTransaction({
        transactionHash: response.hash,
      });

      if (trx.success) {
        console.log("trx complete", trx);
        onSuccess?.();
      }

      return trx;
    } catch (error) {
      console.error("Sign And Submit Error", error);
    }
  };

  const createDao = async (dao: IDaoData) => {
    const _key = "CREATE_DAO";
    return (await executeTransaction(
      RESOURCES[_key],
      [],
      TYPE_FUN_ARGUMENTS[_key](dao)
    )) as TransactionData;
  };

  const joinDaoVip = async (dao: IDaoData, amount: number) => {
    const _key = "JOIN_VIP";

    return (await executeTransaction(
      RESOURCES[_key],
      [],
      TYPE_FUN_ARGUMENTS[_key](dao, amount)
    )) as TransactionData;
  };

  const joinDaoPublic = async (
    dao: IDaoData,
    amount: number,
    signature: string,
    expire_time_in_seconds: string
  ) => {
    const _key = "JOIN_PUBLIC";

    return (await executeTransaction(
      RESOURCES[_key],
      [dao.treasuryAddress],
      TYPE_FUN_ARGUMENTS[_key](dao, amount, signature, expire_time_in_seconds)
    )) as TransactionData;
  };

  const startTrading = async (dao: IDaoData) => {
    const _key = "START_TRADING";

    return (await executeTransaction(
      RESOURCES[_key],
      [],
      TYPE_FUN_ARGUMENTS[_key](dao)
    )) as TransactionData;
  };

  const endWhitelist = async (dao: IDaoData) => {
    const _key = "END_WHITELIST";

    return (await executeTransaction(
      RESOURCES[_key],
      [],
      TYPE_FUN_ARGUMENTS[_key](dao)
    )) as TransactionData;
  };

  const createDaoOnBlockchain = async (data: {
    name: string;
    ticker: string;
    description: string;
    daoId: string;
  }) => {
    if (!MODULE_ADDRESS) {
      setError("Module address not configured");
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await signAndSubmitTransaction({
        type: "entry_function_payload",
        function: `${MODULE_ADDRESS}::${MODULE_NAME}::create_dao`,
        type_arguments: [],
        arguments: [data.name, data.ticker, data.description, data.daoId],
      });

      // Wait for transaction confirmation
      const txnResult = await checkTransaction(response.hash);
      return txnResult;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Failed to create DAO on blockchain";
      setError(message);
      toast({
        title: "Transaction Failed",
        description: message,
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const checkTransaction = async (hash: string) => {
    try {
      const response = await fetch(`/api/transaction/${hash}`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to check transaction");
      }
      return await response.json();
    } catch (error) {
      console.error("Error checking transaction:", error);
      throw error;
    }
  };

  return {
    executeTransaction,
    createDao,
    joinDaoPublic,
    joinDaoVip,
    startTrading,
    endWhitelist,
    createDaoOnBlockchain,
    isLoading,
    error,
  };
};

export { useContract };
