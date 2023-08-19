"use client"
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
        <div className="flex flex-col font-poppins text-white w-full">
            {/* Tab header section */}
            <div className="flex items-center font-bold gap-10 text-xl w-full capitalize border-b pb-3 border-white border-spacing-y-10">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`${activeTabIndex === index && "relative"}`}
                    >
                        {/* Adding a visual indicator for the active tab */}
                        {activeTabIndex === index && (
                            <span className="w-[calc(100%-20px)] absolute -bottom-3 right-1/2 translate-x-1/2 h-[6px] bg-custom-green-normal rounded-t-[10px]"></span>
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Tab content section */}
            <div className="flex flex-col py-6 text-base text-white">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${activeTabIndex === index ? "flex" : "hidden"} animate-blink`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs