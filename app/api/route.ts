import { getRandomItems } from "@/utils/random";
import { Coinbase } from "@coinbase/coinbase-sdk";

export async function POST(request: Request) {
  const { NAME, PRIVATE_KEY, WALLET_DATA } = process.env;

  // Check if the environment variables are set
  if (!NAME || !PRIVATE_KEY) {
    return Response.json(
      { message: "Environment variables are not set" },
      { status: 500 }
    );
  }

  const body = await request.json();

  // Check if the address is provided
  if (!body?.address) {
    return Response.json({ message: "Address is required" }, { status: 400 });
  }

  // Create a new Coinbase instance
  const coinbase = new Coinbase({
    apiKeyName: NAME as string,
    privateKey: PRIVATE_KEY.replaceAll("\\n", "\n") as string,
  });

  // Get the default user
  const user = await coinbase.getDefaultUser();

  let userWallet;


  // Check if the wallet data is provided
  if (WALLET_DATA && WALLET_DATA?.length > 0) {
    try {
      // Parse the wallet data
      const seedFile = JSON.parse(WALLET_DATA || "{}");
      
      // Get the wallet ids
      const walletIds = Object.keys(seedFile);

      // get the random wallet id
      const walletId = getRandomItems(walletIds, 1)[0];

      // Get the seed of the wallet
      const seed = seedFile[walletId]?.seed;

      // Import the wallet
      userWallet = await user?.importWallet({ seed, walletId });
      await userWallet.listAddresses();
    } catch (e) {
      return Response.json(
        { message: "Failed to import wallet" },
        { status: 500 }
      );
    }
  } else {
    // Otherwise, create a new wallet
    userWallet = await user?.createWallet();
    try {
      // Request funds from the faucet if it's available
      await userWallet?.faucet();
    } catch (e) {
      // Log if the faucet is not available.
      console.log("Faucet is not available");
    }
  }

  // Create a transfer to the destination address
  const transfer = await userWallet?.createTransfer({
    amount: 0.00000001,
    assetId: "eth",
    destination: body.address,
  });

  // Return the transaction hash and link
  return Response.json(
    {
      transactionHash: transfer?.getTransactionHash(),
      transactionLink: transfer?.getTransactionLink(),
    },
    { status: 200 }
  );
}

export const dynamic = "force-dynamic";
