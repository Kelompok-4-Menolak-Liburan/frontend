"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import TicketCard from "@/components/ticket-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-between text-white p-24 font-poppins">
      <TicketCard
        type="history"
        eventStartDate={new Date(2023, 8, 20)}
        eventEndDate={new Date(2023, 8, 21)}
        eventName="joyland jakarta 2024"
        ticketName="PRESALE: 3 Day Pass Rreguler Entry"
        ticketAmout={2}
        dateTimePurchase={new Date()}
        imageTicketUrl="/ticket-image.jpg"
      />
      <TicketCard
        type="history"
        eventStartDate={new Date(2023, 8, 20)}
        eventEndDate={new Date(2023, 9, 21)}
        eventName="joyland jakarta 2024"
        ticketName="PRESALE: 3 Day Pass Rreguler Entry"
        ticketAmout={2}
        dateTimePurchase={new Date()}
        imageTicketUrl="/ticket-image.jpg"
      />
      <TicketCard
        type="history"
        eventStartDate={new Date(2023, 8, 20)}
        eventName="joyland jakarta 2024"
        ticketName="PRESALE: 3 Day Pass Rreguler Entry"
        ticketAmout={2}
        dateTimePurchase={new Date()}
        imageTicketUrl="/ticket-image.jpg"
      />
      <TicketCard
        type="checkout"
        eventStartDate={new Date()}
        eventEndDate={new Date()}
        eventName="joyland jakarta 2024"
        ticketName="PRESALE: 3 Day Pass Rreguler Entry"
        ticketAmout={2}
        dateTimePurchase={new Date()}
        imageTicketUrl="/ticket-image.jpg"
      />
    </main>
  );
}
