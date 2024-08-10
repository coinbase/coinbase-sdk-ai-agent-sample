import Image from "next/image";
import { useState } from "react";

type ImageListProps = {
  images: string[];
  onClick: () => void;
};

export const ImageList = ({ images, onClick }: ImageListProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleSelect = (image: string) => {
    if(selectedImage) return
    setSelectedImage(image);
    onClick();
  };
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-1 mt-2 overflow-auto">
      {images.map((image, idx) => (
        <Image
          onClick={() => handleSelect(image)}
          key={`image-${idx}`}
          src={image}
          width={200}
          height={200}
          alt="Building"
          className={`${selectedImage === image ? "border-blue-500 border-2" : "border-2 border-transparent"} cursor-pointer rounded-lg mb-1 mt-4 hover:border-blue-500`}
          fetchPriority="high"
        />
      ))}
    </div>
  );
};
