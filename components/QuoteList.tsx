import { useState } from "react";

type QuoteListProps = {
  quotes: string[];
  onClick: () => void;
};

export const QuoteList = ({ quotes, onClick }: QuoteListProps) => {
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);
  const handleSelect = (quote: string) => {
    if(selectedQuote) return
    setSelectedQuote(quote);
    onClick();
  };

  return (
    <div className="text-gray-900 bg-white border border-gray-200 rounded-lg">
      {quotes.map((quote, idx) => (
        <button
          onClick={() => handleSelect(quote)}
          key={`quote-${idx}`}
          type="button"
          className={`${selectedQuote === quote ? "rounded-lg bg-blue-500 text-white" : "border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700"} relative inline-flex items-center w-full px-4 py-4 text-sm font-medium rounded-t-lg focus:z-10`}
        >
          {quote}
        </button>
      ))}
    </div>
  );
};
