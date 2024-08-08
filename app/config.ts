import { createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [],
  transports: {
    [baseSepolia.id]: http(),
  },
});
