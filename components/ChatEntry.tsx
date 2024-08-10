type ChatEntryProps = {
  message?: string;
  children?: React.ReactNode;
};

export const ChatEntry = ({
  message = "",
  children,
}: ChatEntryProps) => {
  return (
    <div className={`chat-entry flex justify-start`}>
      <div className="flex items-start gap-2.5 mb-7 items-center">
        <div className="relative flex items-center justify-center min-w-10 min-h-10 overflow-hidden bg-blue-600 rounded-full">
          <span className="font-sx text-white">AI</span>
        </div>
        <div className="flex flex-col border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-xl  leading-1.5 p-4">
          <div className={`flex flex-col w-full `}>
            <div className="break-word	text-sm font-normal text-gray-900 dark:text-white">
              {message}
            </div>
          </div>
          <div>{children || ""}</div>
        </div>
      </div>
    </div>
  );
};
