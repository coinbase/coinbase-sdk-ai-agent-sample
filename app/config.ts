import { createConfig, http } from "wagmi";
import { base, mainnet } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [],
  transports: {
    [mainnet.id]: http(),
  },
});
