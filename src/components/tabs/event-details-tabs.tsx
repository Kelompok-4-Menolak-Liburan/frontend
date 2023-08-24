import React, { useState } from "react";
import BulletList from "../bullet-list";
import PurchaseTicket from "../cards/purchase-ticket-card";
import Tabs from "./tabs";

interface EventDetailsTabsProps {
  description: {
    bulletList: string[];
    paragraph: string;
  };
  rules: string;
  purchase: {
    price: number;
    ticketName: string;
    terms: string[];
  }[];
}

const EventDetailsTabs: React.FC<EventDetailsTabsProps> = ({
  description,
  rules,
  purchase,
}) => {
  const [ticketSelected, setTicketSelected] = useState(false);

  const tabs = [
    {
      label: "Description",
      content: (
        <div className="flex flex-col gap-4">
          <BulletList items={description.bulletList} />
          <p>{description.paragraph}</p>
        </div>
      ),
    },
    {
      label: "Rules",
      content: <p>{rules}</p>,
    },
    {
      label: "Purchase",
      content: (
        <div className="flex w-full flex-col gap-5">
          {purchase.map((ticket, index) => (
            <PurchaseTicket
              key={index}
              price={ticket.price}
              ticketName={ticket.ticketName}
              terms={ticket.terms}
              onClick={() => setTicketSelected(true)}
              ticketSelected={ticketSelected}
            />
          ))}
        </div>
      ),
    },
  ];
  return <Tabs tabs={tabs} />;
};
export default EventDetailsTabs;
