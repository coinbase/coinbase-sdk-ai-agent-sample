import { WalletConnect } from "./WalletConnect";

type WalletConnectMessageProps = {
  message: string;
};

export const WalletConnectMessage = ({
  message,
}: WalletConnectMessageProps) => {
  return (
    <>
      {message}
      <div className="flex pt-4">
        <WalletConnect />
      </div>
    </>
  );
};
