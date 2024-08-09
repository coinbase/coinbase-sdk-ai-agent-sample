import * as React from "react";
import { useConnect } from "wagmi";

export function WalletConnect() {
  const { connectors, connect } = useConnect();
  return connectors.map((connector) => (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      key={connector.uid}
      onClick={() => connect({ connector })}
    >
      {connector.id == "coinbaseWalletSDK" ? "Coinbase Smart Wallet" : connector.name}
    </button>
  ));
}
