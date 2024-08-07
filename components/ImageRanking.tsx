import { ChatEntry } from "@/components/ChatEntry";
import { ImageList } from "@/components/ImageList";

type ImageRankingProps = {
  onClick: () => void;
  images: string[];
};

export const ImageRanking = ({ onClick, images }: ImageRankingProps) => {
  return (
    <ChatEntry message="Please click on the image from the list that you think is the best.">
      <ImageList onClick={onClick} images={images} />
    </ChatEntry>
  );
};
