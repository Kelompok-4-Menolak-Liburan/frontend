import { format, isSameDay, isSameMonth } from "date-fns";
import { Calendar, Ticket } from "iconsax-react";
import Button from "./button";
import Image from "next/image";

interface TicketCardProps {
  type: "history" | "checkout";
  ticketName: string;
  eventName: string;
  eventStartDate: Date;
  eventEndDate?: Date;
  ticketAmout: number;
  dateTimePurchase: Date;
  imageTicketUrl: string;
}
const TicketCard: React.FC<TicketCardProps> = ({
  type,
  ticketName,
  eventName,
  eventStartDate,
  eventEndDate,
  ticketAmout,
  dateTimePurchase,
  imageTicketUrl,
}) => {
  const formattedEventDate =
    eventEndDate && !isSameDay(eventStartDate, eventEndDate)
      ? format(
          eventStartDate,
          `${
            isSameMonth(eventStartDate, eventEndDate)
              ? "dd"
              : "dd MMMM"
          }'${"-" + format(eventEndDate, "dd MMMM")}' yyyy`
        )
      : format(eventStartDate, "dd MMMM yyyy");
  const formattedPurchasedDateTime = format(
    dateTimePurchase,
    "MMM dd, yyyy, HH:mm"
  );
  const fontSizeTypeEffect = {
    history: {
      date: "text-base",
      ticketName: "text-xl",
      eventName: "text-base",
    },
    checkout: {
      date: "text-sm",
      ticketName: "text-base",
      eventName: "text-sm",
    },
  };
  const imageSizeTypeEffect = {
    history: {
      width: 320,
      height: 130,
      styling: "w-[320px] h-[130px]",
    },
    checkout: {
      width: 220,
      height: 60,
      styling: "w-[180px] h-[80px]",
    },
  };
  return (
    <div
      className={`w-full ${
        type === "history" ? "py-[30px]" : "py-5"
      } px-7 font-poppins text-white flex bg-custom-purple-300 rounded-[10px]  border border-white items-center justify-between`}
    >
      <div className="flex flex-col gap-1">
        <h3 className={`${fontSizeTypeEffect[type].eventName} uppercase`}>
          {eventName}
        </h3>
        <h4 className={`font-bold ${fontSizeTypeEffect[type].ticketName}`}>
          {ticketName}
        </h4>
        <div className="flex divide-x">
          <div className="flex gap-2 items-center justify-center pr-3">
            {eventStartDate && (
              <>
                <Calendar size={22} color="#FFFFFF" />
                <h5 className={fontSizeTypeEffect[type].date}>
                  {formattedEventDate}
                </h5>
              </>
            )}
          </div>
          <div className="flex gap-2 items-center justify-center pl-3">
            <>
              <Ticket size={22} color="#FFFFFF" />
              <h5 className={fontSizeTypeEffect[type].date}>
                {ticketAmout} Ticket
              </h5>
            </>
          </div>
        </div>
        {type === "history" && (
          <>
            <p
              className={`${fontSizeTypeEffect[type].date} text-custom-purple-75`}
            >
              Purchased on {formattedPurchasedDateTime}
            </p>
            <div className="flex gap-4 pt-3">
              <Button type="button" color="green-primary" size="extra-small">
                E-Voucher
              </Button>
              <Button type="button" color="green-secondary" size="extra-small">
                Invoice
              </Button>
            </div>
          </>
        )}
      </div>
      <Image
        src={imageTicketUrl}
        alt={eventName + "Ticket"}
        width={imageSizeTypeEffect[type].width}
        height={imageSizeTypeEffect[type].height}
        className={`${imageSizeTypeEffect[type].styling} object-cover object-center rounded-[10px]`}
      ></Image>
    </div>
  );
};
export default TicketCard;
