import ManagementList from "@/components/table/management-list";
import React from "react";
import ManagementEventClient from "./management-event-client";

const eventData = Array.from({ length: 50 }, (_, index) => ({
    no: index + 1,
    imageUrl: "/auth/login-bg.png",
    eventName: `Event ${index + 1}`,
    status: index % 2 === 0 ? "Active" : "Not Active",
    sold: 50 + index * 2,
    view: 300 + index * 4,
}));


const Page = () => {
    return (<main className="flex min-h-full w-full flex-col items-center justify-between gap-2 overflow-hidden p-8 font-poppins text-white max-lg:pt-[75px] lg:px-12 lg:py-8 xl:px-16 xl:py-12">
        <ManagementEventClient data={eventData} />
    </main>)
}
export default Page