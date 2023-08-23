import React from "react";
import ManagementEventClient from "./management-event-client";
interface ManagementListProps {
  no: number;
  imageUrl: string;
  eventName: string;
  status: "active" | "not active";
  sold: number;
  view: number;
}

const eventData = Array.from({ length: 50 }, (_, index) => ({
  imageUrl: "/auth/login-bg.png",
  eventName: `Event ${index + 1}ijlkwjd kajs lkdj  slkajd ;lakjd;`,
  status: index % 2 === 0 ? "active" : "not active",
  sold: 50 + index * 2,
  view: 300 + index * 4,
}));

const Page = () => {
  return (
    <main className="flex min-h-full w-full flex-col items-center justify-between gap-2 overflow-hidden p-8 font-poppins text-white max-lg:pt-[75px] lg:px-12 lg:py-8 xl:px-16 xl:py-12">
      <ManagementEventClient data={eventData as ManagementListProps[]} />
    </main>
  );
};
export default Page;
