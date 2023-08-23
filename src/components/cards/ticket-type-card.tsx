import { formattedEventDate } from "@/libs/utils";

interface TicketTypeCardProps {
    ticketName: string;
    ticketType?: string;
    ticketAmount: string;
    dateSaleStart?: Date;
    dateSaleEnd?: Date;
}

const TicketTypeCard = ({ ticketName, ticketAmount, ticketType, dateSaleStart, dateSaleEnd }: TicketTypeCardProps) => {
    return <div className="flex flex-col gap-1 bg-custom-purple-300 rounded-[10px] border border-white p-5 font-poppins text-white">
        <h4 className="text-sm font-bold">{ticketName}</h4>
        <h4 className="text-sm">{ticketType}</h4>
        <h4 className="text-sm">{ticketAmount}</h4>
        {dateSaleEnd && dateSaleStart &&
            <h4 className="text-sm">{formattedEventDate(dateSaleStart, dateSaleEnd)}</h4>
        }
        <h4 className="ml-auto text-sm text-custom-green-normal font-semibold">{500000}</h4>
    </div>
}

export default TicketTypeCard