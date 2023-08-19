// Importing required modules and components
import { getFormattedCurrency } from "@/libs/utlils"; 
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
    <div className="w-[378px] bg-custom-purple-300 hover:scale-[103%] duration-300 cursor-pointer transition flex flex-col bg font-poppins rounded-xl overflow-hidden text-white">
      <div className="w-full h-[182px] relative">
        {/* The event image */}
        <Image
          src={imageUrl}
          alt={eventName + " Image"}
          width={378}
          height={112}
          className="object-center object-cover w-full h-full"
        />
        {/* The event price */}
        <p className="bg-custom-purple-300 rounded-md absolute z-10 left-4 text-base top-4 px-3 py-[5px]">
          {getFormattedCurrency(price)}
        </p>
        {/* Adding an "Add to Archive" button */}
        <button className="bg-custom-purple-300 rounded-md absolute z-10 right-4 top-4 aspect-square p-1.5">
          <ArchiveAdd size={28} color="#FFFFFF" variant="Bold" />
        </button>
      </div>
      <div className="flex flex-col px-5 justify-between flex-1 border-b border-x rounded-b-xl border-white">
        <div className="flex w-full gap-6 py-4 h-full">
          {/* The event month and dates */}
          <div className="flex flex-col font-bold text-lg items-center justify-center">
            <p>{formattedMonth(eventStartDate)}</p>
            <p>
              {formattedDate(eventStartDate)}{" "}
              {eventEndDate && " - " + formattedDate(eventEndDate)}
            </p>
          </div>
          {/* Event details */}
          <div className="flex flex-1 flex-col justify-center">
            <p className="font-bold text-xl pb-1 uppercase">{eventName}</p>
            <p className="text-lg">
              {eventStartTime + " - " + eventEndTime} {timeZone}
            </p>
            <p className="text-lg">{location}</p>
          </div>
        </div>
        {/* Event organizer information */}
        <div className="border-t border-dashed border-white flex items-center gap-4 py-3">
          <Image
            src={imageEventOrganizerUrl}
            alt="Avatar"
            width={36}
            height={36}
            className="object-center object-cover w-9 h-9 aspect-square rounded-full"
          />
          <p className="font-bold text-xl">{eventOrganizer}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
