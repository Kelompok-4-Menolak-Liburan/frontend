import React, { FC } from "react";
import DotIcon from "./icons/dot-icon";

interface BulletPaginationProps {
  numberPage: number;
  currentNumberPage: number;
  setCurrentNumberPage: (pageNumber: number) => void;
  primaryColor: "white";
}

const BulletPagination: FC<BulletPaginationProps> = ({
  numberPage,
  currentNumberPage,
  setCurrentNumberPage,
  primaryColor,
}) => {
  // Define color effects based on the primary color provided
  const colorEffect = {
    white: {
      selected: "fill-custom-purple-50",
      unselected: "fill-custom-purple-100",
    },
  };

  // Create an array of numbers representing the page numbers
  const numbers = Array.from({ length: numberPage }, (_, index) => index);

  // Return the BulletPagination UI
  return (
    // Display BulletPagination only if there's more than one page
    numberPage > 1 && (
      <div className="flex gap-2 lg:gap-3">
        {/* Map through page numbers and display dots */}
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentNumberPage(number)}
            aria-label={`Page-${number}`}
            className={`${
              currentNumberPage === number && "scale-105"
            } transition duration-300 hover:scale-125 hover:drop-shadow-[0px_0px_4px_#FFFFFF]`}
          >
            <DotIcon
              size={12}
              className={`${
                currentNumberPage === number
                  ? colorEffect[primaryColor].selected
                  : colorEffect[primaryColor].unselected
              } w-[8px] lg:w-[17px]`}
            />
          </button>
        ))}
      </div>
    )
  );
};

export default BulletPagination;
