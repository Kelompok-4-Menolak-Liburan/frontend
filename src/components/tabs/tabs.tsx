"use client";
import { useState } from "react";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Using the useState hook to manage active tab index.

  // Function to handle tab click and update active tab index.
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="flex w-full flex-col font-poppins text-white">
      {/* Tab header section */}
      <div className="flex w-full border-spacing-y-10 items-center gap-4 border-b border-white pb-3 text-sm font-bold capitalize lg:gap-10 lg:text-base">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${activeTabIndex === index && "relative"}`}
          >
            {/* Adding a visual indicator for the active tab */}
            {activeTabIndex === index && (
              <span className="absolute -bottom-3 right-1/2 h-[6px] w-[calc(100%-10px)] min-w-[20px] translate-x-1/2 rounded-t-[10px] bg-custom-green-normal"></span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content section */}
      <div className="flex flex-col py-6 text-sm text-white">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTabIndex === index ? "flex" : "hidden"
            } animate-blink`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
