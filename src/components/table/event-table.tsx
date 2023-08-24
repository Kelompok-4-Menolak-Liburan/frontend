import React, { useState } from "react";
import ManagementList from "@/components/table/management-list";
import Pagination from "../pagination";

interface Event {
  imageUrl: string;
  eventName: string;
  status: "active" | "not active";
  sold: number;
  view: number;
}

interface EventListProps {
  events: Event[];
  searchStatus: boolean;
}

const EventList: React.FC<EventListProps> = ({ events, searchStatus }) => {
  // Number of items per page
  const listPerPage = 8;

  // Number of current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate indexes for pagination
  const indexOfLastCard = currentPage * listPerPage;
  const indexOfFirstCard = indexOfLastCard - listPerPage;
  const currentList = events.slice(indexOfFirstCard, indexOfLastCard);
  const numberPage = Math.ceil(events.length / listPerPage);

  return (
    <div className="flex w-full flex-col gap-5 max-lg:overflow-x-scroll">
      {/* Render the tables if there's data found */}
      {events.length > 0 ? (
        <table className="w-full table-auto">
          <thead className="w-full text-white">
            {/* Placeholder table column */}
            <tr className="bg-custom-purple-500 text-sm text-white lg:text-base">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Event Image</th>
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Sold</th>
              <th className="px-4 py-2">View</th>
              <th className="px-4 py-2">Edit Event</th>
              <th className="px-4 py-2">See Event</th>
              <th className="px-4 py-2">See Data</th>
            </tr>
          </thead>
          {/* Mapping the data */}
          <tbody className="w-full text-center">
            {!searchStatus
              ? currentList.map((event, index) => (
                <ManagementList
                  key={index}
                  no={indexOfFirstCard + index + 1}
                  imageUrl={event.imageUrl}
                  eventName={event.eventName}
                  status={event.status}
                  sold={event.sold}
                  view={event.view}
                />
              ))
              : events.map((event, index) => (
                <ManagementList
                  key={index}
                  no={index + 1}
                  imageUrl={event.imageUrl}
                  eventName={event.eventName}
                  status={event.status}
                  sold={event.sold}
                  view={event.view}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <p className="m-auto w-full py-5 text-center text-2xl font-bold text-custom-green-normal">
          Not Found
        </p>
      )}
      {/* Dont'give any pagination if search active */}
      {!searchStatus && (
        <div className="ml-auto w-full">
          <Pagination
            numberPage={numberPage}
            setCurrentNumberPage={setCurrentPage}
            currentNumberPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default EventList;
