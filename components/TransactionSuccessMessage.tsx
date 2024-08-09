import Link from "next/link";
import { CheckmarkIcon } from "./CheckmarkIcon";

type TransactionMessageProps = {
  data: {
    transactionLink: string;
    transactionHash: string;
  };
};

export const TransactionSuccessMessage = ({
  data,
}: TransactionMessageProps) => {
  return (
    <div className="flex flex-row align-center">
      <div className="flex align-center">
        <div className=" flex items-center justify-center">
          <CheckmarkIcon />
        </div>
      </div>
      <div className="pt-1.5 pl-2">
        Transaction successfully sent to your wallet. The transaction hash of
        your reward is{" "}
        <Link
          target="_blank"
          href={data.transactionLink}
          className="text-blue-700"
        >
          {data.transactionHash}
        </Link>{' '}
        on Base-Sepolia Testnet. Thank you for participating!
      </div>
    </div>
  );
};
