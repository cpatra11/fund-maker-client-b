import React from "react";
import BaseFundCard, { BaseFundCardProps } from "./base-fund-card";

type UpcomingFundCardProps = Omit<
  BaseFundCardProps,
  "statusLabel" | "statusColor" | "statusBgColor"
>;

const UpcomingFundCard = (props: UpcomingFundCardProps) => {
  return (
    <BaseFundCard
      {...props}
      statusLabel="COMING SOON"
      statusColor="#FFA94F"
      statusBgColor="rgba(255, 169, 79, 0.4)"
    />
  );
};

export default UpcomingFundCard;
