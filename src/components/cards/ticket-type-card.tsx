import { formattedEventDate, getFormattedCurrency } from "@/libs/utils";

interface TicketTypeCardProps {
  ticketName: string;
  ticketAmount: string;
  dateSaleStart: string;
  dateSaleEnd: string;
  price?: string;
  startPrice?: string;
}

const TicketTypeCard = ({
  ticketName,
  ticketAmount,
  dateSaleStart,
  dateSaleEnd,
  price,
  startPrice,
}: TicketTypeCardProps) => {
  return (
    <div className="flex min-w-[200px] flex-col rounded-[10px] border border-white bg-custom-purple-300 p-3 font-poppins text-white lg:p-5">
      <h4 className="text-sm font-bold">{ticketName}</h4>
      <h4 className="text-sm">
        {price
          ? "Paid Ticket"
          : startPrice
          ? "Volunteer Ticket"
          : "Free Ticket"}
      </h4>
      <h4 className="text-sm">{ticketAmount}</h4>
      {dateSaleEnd && dateSaleStart && (
        <h4 className="text-sm">
          {formattedEventDate(new Date(dateSaleStart), new Date(dateSaleEnd))}
        </h4>
      )}
      <h4 className="ml-auto pt-1 text-sm font-semibold text-custom-green-normal">
        {(price && getFormattedCurrency(parseInt(price))) ||
          (startPrice && ">" + getFormattedCurrency(parseInt(startPrice)))}
      </h4>
    </div>
  );
};

export default TicketTypeCard;
