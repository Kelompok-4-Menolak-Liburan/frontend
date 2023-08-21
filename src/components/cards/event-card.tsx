// Importing required modules and components
import { getFormattedCurrency } from "@/libs/utils";
import { format, getDate } from "date-fns";
import { ArchiveAdd } from "iconsax-react";
import Image from "next/image";

interface EventCardProps {
  imageUrl: string;
  price: number;
  eventName: string;
  eventStartTime: string;
  eventEndTime: string;
  location: string;
  eventStartDate: Date;
  eventEndDate?: Date;
  eventOrganizer: string;
  imageEventOrganizerUrl: string;
  timeZone: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  price,
  eventName,
  eventStartTime,
  eventEndTime,
  location,
  eventStartDate,
  eventEndDate,
  eventOrganizer,
  imageEventOrganizerUrl,
  timeZone,
}) => {
  // Function to get the abbreviated month name (e.g., "Jan")
  const formattedMonth = (date: Date) => {
    return format(date, "MMM");
  };

  // Function to get the day of the month
  const formattedDate = (date: Date) => {
    return getDate(date);
  };

  return (
    <div className="bg flex w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-custom-purple-300 font-poppins text-white transition duration-300 hover:scale-[102%]">
      <div className="relative h-[122px] w-full">
        {/* The event image */}
        <Image
          src={imageUrl}
          alt={eventName + " Image"}
          width={328}
          height={82}
          className="h-full w-full object-cover object-center"
        />
        {/* The event price */}
        <p className="absolute left-4 top-4 z-10 rounded-md bg-custom-purple-300 px-3 py-[5px] text-sm 2xl:text-base">
          {getFormattedCurrency(price)}
        </p>
        {/* Adding an "Add to Archive" button */}
        <button className="absolute right-4 top-4 z-10 aspect-square rounded-md bg-custom-purple-300 p-1.5">
          <ArchiveAdd size={18} color="#FFFFFF" variant="Bold" />
        </button>
      </div>
      <div className="flex flex-1 flex-col justify-between rounded-b-xl border-x border-b border-white px-5">
        <div className="flex h-full w-full gap-4 py-2 lg:gap-6 lg:py-3">
          {/* The event month and dates */}
          <div className="flex flex-col items-center justify-center text-sm font-bold 2xl:text-base">
            <p>{formattedMonth(eventStartDate)}</p>
            <p>
              {formattedDate(eventStartDate)}{" "}
              {eventEndDate && " - " + formattedDate(eventEndDate)}
            </p>
          </div>
          {/* Event details */}
          <div className="flex flex-1 flex-col justify-center">
            <p className="pb-1 text-sm font-bold uppercase lg:text-base 2xl:text-lg">
              {eventName}
            </p>
            <p className="text-xs lg:text-sm">
              {eventStartTime + " - " + eventEndTime} {timeZone}
            </p>
            <p className="text-sm 2xl:text-base">{location}</p>
          </div>
        </div>
        {/* Event organizer information */}
        <div className="flex items-center gap-3 border-t border-dashed border-white py-2.5 lg:gap-4">
          <Image
            src={imageEventOrganizerUrl}
            alt="Avatar"
            width={32}
            height={32}
            className="aspect-square  rounded-full object-cover object-center"
          />
          <p className="text-xs font-bold 2xl:text-sm">{eventOrganizer}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
