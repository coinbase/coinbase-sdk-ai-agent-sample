"use client";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";

const ChatScreen = dynamic(() => import("@/components/ChatScreen"), {
  ssr: false,
});
const WalletProviders = dynamic(() => import("@/components/WalletProviders"), {
  ssr: false,
});

export default function Home() {
  const random = Math.random();
  const isImageRanking = random > 0.5;

  return (
    <main>
      <Navigation />
      <WalletProviders>
        <ChatScreen showImageRanking={isImageRanking} />
      </WalletProviders>
    </main>
  );
}
