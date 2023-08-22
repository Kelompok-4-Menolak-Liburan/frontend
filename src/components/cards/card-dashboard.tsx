import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type StyleType = "primary" | "secondary";

interface CardProps {
  title: string;
  value: string;
  icon: string;
  style: StyleType;
}

const CardDashboard = ({ title, value, icon, style }: CardProps) => {
  return (
    <div
      className={`shadow-custom-purple-600 flex h-auto w-[262px]  flex-col rounded-lg  px-5 py-4 shadow-xl ${
        style === "primary"
          ? "bg-custom-purple-500 text-white shadow-custom-purple-500/60"
          : "text-grey bg-white"
      }`}
    >
      <div className="mb-4 flex flex-row items-center">
        <Icon
          icon={icon}
          className={`mr-4 ${style !== "primary" && "text-redlinear"}`}
          fontSize={20}
        />
        <h4 className="font-medium">{title}</h4>
      </div>
      <h1
        className={
          style !== "primary" ? "text-black/text font-semibold" : "font-bold"
        }
      >
        {value}
      </h1>
    </div>
  );
};

export default CardDashboard;
