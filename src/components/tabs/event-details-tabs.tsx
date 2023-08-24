import React, { useState } from "react";
import BulletList from "../bullet-list";
import PurchaseTicket from "../cards/purchase-ticket-card";
import Tabs from "./tabs";

interface EventDetailsTabsProps {
  description: string;
  // rules: string;
  purchase: any;
}

const EventDetailsTabs: React.FC<EventDetailsTabsProps> = ({
  description,
  // rules,
  purchase,
}) => {
  const [ticketSelected, setTicketSelected] = useState(false);

  const ticket = !purchase ? (
    purchase.map(
      (
        ticket: { price: number; ticketName: string; terms: string[] },
        index: React.Key | null | undefined,
      ): any => (
        <PurchaseTicket
          key={index}
          price={ticket.price}
          ticketName={ticket.ticketName}
          terms={ticket.terms}
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
          {/* <BulletList items={description.bulletList} /> */}
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
