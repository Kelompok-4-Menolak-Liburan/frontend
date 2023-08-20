import React from "react";

const DotIcon = ({ size, className }: { size: number, className?: string }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx={5} cy={5} r={5} />
        </svg>
    );
};

export default DotIcon;
