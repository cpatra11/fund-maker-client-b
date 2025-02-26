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
      statusColor="#ff6b00"
      statusBgColor="rgba(255, 107, 0, 0.1)"
    />
  );
};

export default UpcomingFundCard;
