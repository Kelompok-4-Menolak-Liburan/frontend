import React, { FC } from "react";

interface PaginationProps {
  numberPage: number;
  currentNumberPage: number;
  setCurrentNumberPage: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  numberPage,
  currentNumberPage,
  setCurrentNumberPage,
}) => {
  const MAX_VISIBLE_PAGES = 7;

  // Calculate the range of visible page numbers based on current page
  let startPage: number, endPage: number;
  if (currentNumberPage <= Math.floor(MAX_VISIBLE_PAGES / 2)) {
    startPage = 1;
    endPage = Math.min(numberPage, MAX_VISIBLE_PAGES);
  } else if (
    currentNumberPage >
    numberPage - Math.floor(MAX_VISIBLE_PAGES / 2)
  ) {
    startPage = Math.max(1, numberPage - MAX_VISIBLE_PAGES + 1);
    endPage = numberPage;
  } else {
    startPage = currentNumberPage - Math.floor(MAX_VISIBLE_PAGES / 2);
    endPage = currentNumberPage + Math.floor(MAX_VISIBLE_PAGES / 2);
  }

  // Determine whether to show ellipsis for pagination
  const shouldShowStartEllipsis = startPage > 1;
  const shouldShowEndEllipsis = endPage < numberPage;

  // Handle previous page click
  const handlePreviousClick = () => {
    const newPage = ((currentNumberPage - 2 + numberPage) % numberPage) + 1;
    setCurrentNumberPage(newPage);
  };

  // Handle next page click
  const handleNextClick = () => {
    const newPage = (currentNumberPage % numberPage) + 1;
    setCurrentNumberPage(newPage);
  };

  return (
    numberPage > 1 && (
      <div className="flex gap-4 text-sm lg:text-base">
        {/* Previous button */}
        <button
          onClick={handlePreviousClick}
          className="rounded-lg border border-white bg-custom-purple-300 px-3 py-2"
        >
          Previous
        </button>

        <div className="flex">
          {/* Render buttons or ellipsis for pages */}
          {shouldShowStartEllipsis && (
            <button
              onClick={() => setCurrentNumberPage(1)}
              className="border border-white px-3 py-1 transition duration-300 hover:drop-shadow-[0px_0px_4px_#FFFFFF]"
            >
              1
            </button>
          )}
          {shouldShowStartEllipsis && (
            <span
              aria-label="Ellipsis"
              className="border border-white px-3 py-1 transition duration-300 hover:drop-shadow-[0px_0px_4px_#FFFFFF]"
            >
              ...
            </span>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <button
              key={startPage + index}
              onClick={() => setCurrentNumberPage(startPage + index)}
              aria-label={`Page-${startPage + index}`}
              className={`border border-white px-3 py-1 transition duration-300 hover:drop-shadow-[0px_0px_4px_#FFFFFF] ${
                startPage + index === currentNumberPage
                  ? "bg-white text-custom-purple-400"
                  : "bg-custom-purple-400 text-white"
              }`}
            >
              {startPage + index}
            </button>
          ))}
          {shouldShowEndEllipsis && (
            <span
              aria-label="Ellipsis"
              className="border border-white px-3 py-1 transition duration-300 hover:drop-shadow-[0px_0px_4px_#FFFFFF]"
            >
              ...
            </span>
          )}
          {shouldShowEndEllipsis && (
            <button
              onClick={() => setCurrentNumberPage(numberPage)}
              className="border border-white px-3 py-1 transition duration-300 hover:drop-shadow-[0px_0px_4px_#FFFFFF]"
            >
              {numberPage}
            </button>
          )}
        </div>

        {/* Next button */}
        <button
          onClick={handleNextClick}
          className="rounded-lg border border-white bg-custom-purple-300 px-3 py-2"
        >
          Next
        </button>
      </div>
    )
  );
};

export default Pagination;
