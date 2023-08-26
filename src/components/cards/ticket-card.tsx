import { format, isSameDay, isSameMonth } from "date-fns";
import { Calendar, Ticket } from "iconsax-react";
import Button from "../button";
import Image from "next/image";
import { formattedEventDate } from "@/libs/utils";

// Defining the prop types for the TicketCard component
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
  // Formatting the purchased date and time
  const formattedPurchasedDateTime = format(
    dateTimePurchase,
    "MMM dd, yyyy, HH:mm",
  );

  // Font size and styling based on the ticket type
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

  // Image size and styling based on the ticket type
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
        type === "history" ? "py-7" : "py-5"
      } flex items-center justify-between rounded-[10px] border border-white  bg-custom-purple-300 px-7 font-poppins text-white`}
    >
      <div className="flex flex-col gap-1">
        {/* Event Name */}
        <h3 className={`${fontSizeTypeEffect[type].eventName} uppercase`}>
          {eventName}
        </h3>

        {/* Ticket Name */}
        <h4 className={`font-bold ${fontSizeTypeEffect[type].ticketName}`}>
          {ticketName}
        </h4>

        {/* Container ticket date and ticket amount */}
        <div className="flex divide-x">
          {/* Ticket Date */}
          <div className="flex items-center justify-center gap-2 pr-3">
            {eventStartDate && (
              <>
                <Calendar size={22} color="#FFFFFF" />
                <h5 className={fontSizeTypeEffect[type].date}>
                  {formattedEventDate(eventStartDate, eventEndDate)}
                </h5>
              </>
            )}
          </div>

          {/* Ticket Amount */}
          <div className="flex items-center justify-center gap-2 pl-3">
            <>
              <Ticket size={22} color="#FFFFFF" />
              <h5 className={fontSizeTypeEffect[type].date}>
                {ticketAmout} Ticket
              </h5>
            </>
          </div>
        </div>

        {/* Render button and puchased datetime on history type */}
        {type === "history" && (
          <>
            {/* Purchased date time */}
            <p
              className={`${fontSizeTypeEffect[type].date} text-custom-purple-75`}
            >
              Purchased on {formattedPurchasedDateTime}
            </p>
            {/* Button Component Rendered */}
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
      {/* Ticket Image */}
      <Image
        src={imageTicketUrl}
        alt={eventName + "Ticket"}
        width={imageSizeTypeEffect[type].width}
        height={imageSizeTypeEffect[type].height}
        className={`${imageSizeTypeEffect[type].styling} rounded-[10px] object-cover object-center`}
      ></Image>
    </div>
  );
};
export default TicketCard;
