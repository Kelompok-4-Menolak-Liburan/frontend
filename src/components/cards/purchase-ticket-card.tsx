import { getFormattedCurrency } from "@/libs/utils";
import BulletList from "../bullet-list";
import Button from "../button";

interface PurchaseTicketProps {
    ticketName: string;
    terms: string[]
    price: number
}
const PurchaseTicket: React.FC<PurchaseTicketProps> = ({ ticketName, terms, price }) => {
    return (
        <div className="w-full flex flex-col gap-1 py-4 px-7 text-white font-poppins border border-white rounded-2xl bg-custom-purple-300">
            {/* Ticket name */}
            <h3 className="font-bold text-xl">{ticketName}</h3>
            <div className="flex flex-col">
                {/* Rendering a BulletList component to display the terms */}
                <BulletList items={terms} style="text-base" />
                <div className="ml-auto flex items-center gap-4">
                    {/* Price */}
                    <p className="text-lg font-bold border-r border-white px-4">{getFormattedCurrency(price)}</p>
                    {/* Rendering a Button component */}
                    <Button color="green-primary" type="button" size="extra-small">Buy Ticket</Button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTicket