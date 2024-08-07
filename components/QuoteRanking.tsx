import { ChatEntry } from "@/components/ChatEntry";
import { QuoteList } from "@/components/QuoteList";

type QuoteRankingProps = {
  onClick: () => void;
  quotes: string[];
};


export const QuoteRanking = ({ onClick, quotes }: QuoteRankingProps) => {
  return (
    <ChatEntry message="Please click on the quote from the list that you think is the best.">
      <div className="flex flex-row gap-5 mt-6">
        <QuoteList onClick={onClick} quotes={quotes} />
      </div>
    </ChatEntry>
  );
};
