// Importing required modules and components
import { EventData } from "@/app/(site)/type";
import { getFormattedCurrency } from "@/libs/utils";
import { format, getDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const EventCard: React.FC<EventData> = ({
  id,
  title,
  image_url,
  start_date,
  end_date,
  start_time,
  end_time,
  city,
  price,
  organizer,
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
    <Link
      href={`/event-detail/${id}`}
      className="bg flex w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-custom-purple-300 font-poppins text-white transition duration-300 hover:scale-[102%]"
    >
      <div className="relative h-[122px] w-full">
        {/* The event image */}
        <Image
          src={image_url}
          alt={title + " Image"}
          width={328}
          height={82}
          className="h-full w-full object-cover object-center"
        />
        {/* The event price */}
        {price && (
          <p className="absolute left-4 top-4 z-10 rounded-md bg-custom-purple-300 px-3 py-[5px] text-sm 2xl:text-base">
            {getFormattedCurrency(price)}
          </p>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between rounded-b-xl border-x border-b border-white px-5">
        <div className="flex h-full w-full gap-4 py-2 lg:gap-6 lg:py-3">
          {/* The event month and dates */}
          <div className="flex flex-col items-center justify-center text-sm font-bold 2xl:text-base">
            <p>{formattedMonth(new Date(start_date))}</p>
            <p>
              {formattedDate(new Date(start_date))}{" "}
              {end_date && " - " + formattedDate(new Date(end_date))}{" "}
            </p>
          </div>

          {/* Event details */}
          <div className="flex flex-1 flex-col justify-center">
            <p className="pb-1 text-sm font-bold uppercase">
              {title.length > 25 ? title.slice(0, 25) + "..." : title}
            </p>
            <p className="text-xs lg:text-sm">
              {start_time.slice(0, 5)} - {end_time.slice(0, 5)}
            </p>
            <p className="text-sm 2xl:text-base">{city}</p>
          </div>
        </div>
        {/* Event organizer information */}
        <div className="flex items-center gap-3 border-t border-dashed border-white py-2.5 lg:gap-4">
          <p className="text-xs font-bold 2xl:text-sm">
            Organized by: {organizer}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
