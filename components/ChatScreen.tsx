import { ChatEntry } from "@/components/ChatEntry";
import { ImageRanking } from "@/components/ImageRanking";
import { QuoteRanking } from "@/components/QuoteRanking";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { SuccessMessage } from "./SuccessMessage";
import { WalletConnectMessage } from "./WalletConnectMessage";
import { TransactionSuccessMessage } from "./TransactionSuccessMessage";
import { TransactionFailedMessage } from "./TransactionFailedMessage";
import { getRandomItems } from "@/utils/random";
import { images, quotes } from "@/utils/data";
import { LoadingIcon } from "./LoadingIcon";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Link from "next/link";

type ChatEntry = {
  message: React.ReactNode;
}[];

export default function ChatScreen({
  showImageRanking,
}: {
  showImageRanking: boolean;
}) {
  const { width, height } = useWindowSize();
  const { isFetched, error, data, refetch } = useQuery({
    queryKey: ["transaction-request"],
    queryFn: () =>
      fetch("/api", {
        method: "POST",
        body: JSON.stringify({ address: account.address }),
      }).then((res) => res.json()),
    enabled: false,
    retry: false,
  });
  const account = useAccount();
  const [entries, setEntries] = useState<ChatEntry>([]);
  const [selectedImages] = useState<string[]>(getRandomItems(images));
  const [selectedQuotes] = useState<string[]>(getRandomItems(quotes));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the container whenever items change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [entries]);

  const addEntry = useCallback(
    (message: any, removeLast = false) => {
      setEntries((prevEntries) => [
        ...prevEntries.slice(
          0,
          removeLast ? prevEntries.length - 1 : prevEntries.length
        ),
        {
          message,
        },
      ]);
    },
    [setEntries]
  );

  const onTaskComplete = useCallback(() => {
    addEntry(
      account.address ? (
        <SuccessMessage
          message={`Thank you for your response! We will send your reward to ${account.address.substring(0, 10)}...`}
        />
      ) : (
        <WalletConnectMessage message="Thank you for your response! Please connect your wallet to continue." />
      )
    );
  }, [account.address, addEntry]);

  const initiateTransaction = useCallback(() => {
    addEntry(
      <div className="inline-block align-center">
        <div className="pb-3 flex items-center justify-center">
          <LoadingIcon />
        </div>
        Initiating transaction, please wait...
      </div>
    );
    refetch();
  }, []);

  useEffect(() => {
    !isFetched &&
      entries.length == 1 &&
      account.address &&
      initiateTransaction();
  }, [isFetched, entries.length, account.address, initiateTransaction]);

  useEffect(() => {
    if (!isFetched) return;
    if (data?.transactionHash) {
      addEntry(<TransactionSuccessMessage data={data} />, true);
    } else if (!data?.transactionHash || error) {
      addEntry(<TransactionFailedMessage />, true);
    }
  }, [isFetched, data, error, addEntry]);

  const isSuccessRequest = useMemo(() => {
    return isFetched && data?.transactionHash?.length > 0;
  }, [isFetched, data]);

  return (
    <div ref={containerRef} className="overflow-y-auto max-h-screen">
      <div className=" pb-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-7 flex flex-col">
        <Confetti
          width={width}
          height={height}
          tweenDuration={2000}
          run={isSuccessRequest}
        />
        <ChatEntry>
          <div className="text-sm font-normal text-gray-900 dark:text-white">
            Turbocharge your machine learning with AI wallets: now, you can
            automatically pay your users to help improve your models, powered by{" "}
            <Link
              href="https://docs.cdp.coinbase.com/mpc-wallet/docs/welcome"
              target="_blank"
              className="text-blue-700"
            >
              Coinbase MPC Wallets
            </Link>
            . This sample app allows you to earn ETH on Base Sepolia in exchange
            for providing feedback to our AI agent. Try it out below!
          </div>
        </ChatEntry>
        {showImageRanking && (
          <ImageRanking onClick={onTaskComplete} images={selectedImages} />
        )}
        {!showImageRanking && (
          <QuoteRanking onClick={onTaskComplete} quotes={selectedQuotes} />
        )}
        {entries.map((entry: any, idx: number) => (
          <ChatEntry key={`entry-${idx}`} message={entry.message} />
        ))}
      </div>
    </div>
  );
}
