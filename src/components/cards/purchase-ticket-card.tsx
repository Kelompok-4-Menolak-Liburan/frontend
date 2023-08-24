import { getFormattedCurrency } from "@/libs/utils";
import BulletList from "../bullet-list";
import Button from "../button";

interface PurchaseTicketProps {
  ticketName: string;
  terms: string[];
  price: number;
}
const PurchaseTicket: React.FC<PurchaseTicketProps> = ({
  ticketName,
  terms,
  price,
}) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-2xl border border-white bg-custom-purple-300 px-7 py-4 font-poppins text-white">
      {/* Ticket name */}
      <h3 className="text-base font-bold">{ticketName}</h3>
      <div className="mt-2 flex flex-col">
        {/* Rendering a BulletList component to display the terms */}
        <BulletList items={terms} style="text-sm" />
        <div className="ml-auto mt-3 flex items-center gap-4">
          {/* Price */}
          <p className="border-r border-white px-4 text-sm font-bold">
            {getFormattedCurrency(price)}
          </p>
          {/* Rendering a Button component */}
          <Button color="green-primary" type="button" size="extra-small">
            Buy Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicket;
