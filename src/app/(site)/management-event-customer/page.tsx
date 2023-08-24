import React from "react";
import ManagementEventClient from "./management-event-client";
interface EventListCustomerProps {
  no: number;
  imageUrl: string;
  email: string;
  name: string;
  ticketName: string
  buyDate: Date;
  price?: number;
  isFree?: boolean
}
const dummyData: EventListCustomerProps[] = [];

for (let i = 1; i <= 50; i++) {
  const dummyEvent: EventListCustomerProps = {
    no: i,
    imageUrl: `/logo.png`,
    email: `email${i}@example.com`,
    name: `Customer ${i}`,
    ticketName: `Ticket ${i}`,
    buyDate: new Date(),
    price: Math.floor(Math.random() * 100) + 50, // Random price between 50 and 149
    isFree: i % 5 === 0, // Set isFree to true for every 5th event
  };

  dummyData.push(dummyEvent);
}

const Page = () => {
  return (
    <main className="flex min-h-full w-full flex-col items-center justify-between gap-2 overflow-hidden p-8 font-poppins text-white max-lg:pt-[75px] lg:px-12 lg:py-8 xl:px-16 xl:py-12">
      <ManagementEventClient data={dummyData} />
    </main>
  );
};
export default Page;
