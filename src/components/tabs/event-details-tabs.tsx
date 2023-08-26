import React, { useState } from "react";
import BulletList from "../bullet-list";
import PurchaseTicket from "../cards/purchase-ticket-card";
import Tabs from "./tabs";

interface Purchase {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  ticket_quantity: number;
  ticket_type: string;
  description: string;
  price: number;
}
interface EventDetailsTabsProps {
  description: string;
  // rules: string;
  purchase: Purchase[];
}

const EventDetailsTabs: React.FC<EventDetailsTabsProps> = ({
  description,
  // rules,
  purchase,
}) => {
  const [ticketSelected, setTicketSelected] = useState(false);

  console.log(purchase);
  const ticket = purchase ? (
    purchase.map(
      (ticket: Purchase, index: React.Key | null | undefined): any => (
        <PurchaseTicket
          key={index}
          price={ticket.price}
          ticketName={ticket.title}
          terms={ticket.description}
          ticketSelected={ticketSelected}
          onClick={() => setTicketSelected(true)}
        />
      ),
    )
  ) : (
    <p>No ticket available</p>
  );

  console.log(purchase.length == 0);

  const tabs = [
    {
      label: "Description",
      content: (
        <div className="flex flex-col gap-4">
          <p>{description}</p>
        </div>
      ),
    },
    {
      label: "Purchase",
      content: <div className="flex w-full flex-col gap-5">{ticket}</div>,
    },
  ];
  return <Tabs tabs={tabs} />;
};
export default EventDetailsTabs;
