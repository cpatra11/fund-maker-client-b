import { useEffect, useState } from "react";
import type { DaoData, DaoFormData } from "@/validation/dao.validation";
import { useToast } from "./use-toast";
import DAOAPI from "@/request/dao/dao.api";

export interface DaoFormValues {
  managerName: string;
  fundName: string;
  fundTicker: string;
  fundDescription: string;
  fundXHandle?: string;
  fundTelegramLink?: string;
  fundManagerXHandle?: string;
  fundManagerTelegramLink?: string;
  logoUrl?: string;
  creatorAddress?: string;
}

const useDao = (ifetch = false) => {
  const [daos, setDaos] = useState<DaoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const api = new DAOAPI();

  useEffect(() => {
    if (!ifetch) return;

    setLoading(true);
    fetchAllDaoData()
      .then((resp) => {
        setDaos(resp);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setDaos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const { toast } = useToast();

  const fetchAllDaoData = async (
    walletAddress?: string
  ): Promise<DaoData[]> => {
    try {
      const response = await api.getAllDAOs();
      return response;
    } catch (error) {
      toast({
        title: "Failed to fetch dao data",
        variant: "destructive",
      });
      return [];
    }
  };

  const fetchDao = async (id: string): Promise<DaoData | null> => {
    try {
      const response = await api.getSingleDAO(id);
      return response;
    } catch (error) {
      toast({
        title: "Failed to fetch dao entry",
        variant: "destructive",
      });
      return null;
    }
  };

  const createDao = async (
    data: DaoFormData,
    inviteCode: string
  ): Promise<DaoData | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/dao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inviteCode,
          ...data,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create DAO");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
      toast({
        title: "Failed to create DAO",
        description: message,
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDao = async (id: string) => {
    try {
      const response = await api.removeDAO(id);
      return response;
    } catch (error) {
      toast({
        title: "Failed to delete dao",
        variant: "destructive",
      });
    }
  };

  const updateDaoValue = async (id: string, value: Partial<DaoData>) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/dao/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update DAO");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
      toast({
        title: "Failed to update DAO",
        description: message,
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    daos,
    loading,
    error,
    fetchAllDaoData,
    fetchDao,
    createDao,
    deleteDao,
    updateDaoValue,
    isLoading,
  };
};

export { useDao };
