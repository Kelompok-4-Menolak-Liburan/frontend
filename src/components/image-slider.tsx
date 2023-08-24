"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BulletPagination from "./bullet-pagination";

const ImageSlider = ({ imageArrayUrls }: { imageArrayUrls: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % imageArrayUrls.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, imageArrayUrls]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={imageArrayUrls[currentIndex]}
        width={1920}
        height={250}
        alt="Image carousels"
        className="h-[200px] w-full animate-blink rounded-3xl object-cover object-center lg:h-[250px]"
      />
      <BulletPagination
        numberPage={imageArrayUrls.length}
        currentNumberPage={currentIndex}
        setCurrentNumberPage={setCurrentIndex}
        primaryColor="white"
      />
    </div>
  );
};

export default ImageSlider;
