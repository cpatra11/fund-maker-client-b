import BaseFundCard, { BaseFundCardProps } from "./base-fund-card";

type FeaturedFundCardProps = Omit<
  BaseFundCardProps,
  "statusLabel" | "statusColor" | "statusBgColor"
>;

const FeaturedFundCard = (props: FeaturedFundCardProps) => {
  return (
    <BaseFundCard
      {...props}
      statusLabel="LIVE"
      statusColor="#5bd739"
      statusBgColor="rgba(175, 255, 153, 0.4)"
    />
  );
};

export default FeaturedFundCard;
