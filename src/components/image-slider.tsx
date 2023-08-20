"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BulletPagination from "./bullet-pagination";
interface ImageSliderProps {
    imageUrl: string;
    imageAlt: string;
    imageWidth: number
    imageHeight: number
}
const ImageSlider = ({ imageArray }: { imageArray: ImageSliderProps[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextIndex = (currentIndex + 1) % imageArray.length;
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex, imageArray]);

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <Image
                src={imageArray[currentIndex].imageUrl}
                width={imageArray[currentIndex].imageWidth}
                height={imageArray[currentIndex].imageHeight}
                alt="Image"
                key={imageArray[currentIndex].imageAlt}
                className="w-full h-[300px] animate-blink rounded-3xl object-center object-cover"
            />
            <BulletPagination
                numberPage={imageArray.length}
                currentNumberPage={currentIndex}
                setCurrentNumberPage={setCurrentIndex}
                primaryColor="white"
            />
        </div>
    );
};

export default ImageSlider;
