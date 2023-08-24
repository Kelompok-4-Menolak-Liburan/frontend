import React, { useState } from "react";
import ManagementList from "@/components/table/management-list";
import Pagination from "../pagination";
import ManagementListCustomer from "./managemet-list-customer";

interface EventData {
  imageUrl: string;
  email: string;
  name: string;
  ticketName: string;
  buyDate: Date;
  price?: number;
  isFree?: boolean;
}

interface EventListCustomerProps {
  events: EventData[]; // Change the type to EventData[]
  searchStatus: boolean;
}

const EventListCustomer: React.FC<EventListCustomerProps> = ({
  events,
  searchStatus,
}) => {
  const listPerPage = 8;

  // Number of current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate indexes for pagination
  const indexOfLastCard = currentPage * listPerPage;
  const indexOfFirstCard = indexOfLastCard - listPerPage;
  const currentList = events.slice(indexOfFirstCard, indexOfLastCard);
  const numberPage = Math.ceil(events.length / listPerPage);
  return (<div className="flex w-full flex-col gap-5 max-lg:overflow-x-scroll">
    {/* Render the tables if there's data found */}
    {events.length > 0 ? (
      <table className="w-full table-auto">
        <thead className="w-full text-white">
          {/* Placeholder table column */}
          <tr className="bg-custom-purple-500 text-sm text-white lg:text-base">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Buy Date</th>
            <th className="px-4 py-2">Ticket Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Edit</th>
          </tr>
        </thead>
        {/* Mapping the data */}
        <tbody className="w-full text-center">
          {!searchStatus
            ? currentList.map((event, index) => (
              <ManagementListCustomer
                key={index}
                no={indexOfFirstCard + index + 1}
                imageUrl={event.imageUrl}
                name={event.name}
                ticketName={event.ticketName}
                price={event.price}
                buyDate={event.buyDate}
                email={event.email}

              />

            ))
            : events.map((event, index) => (
              <ManagementListCustomer
                key={index}
                no={index + 1}
                imageUrl={event.imageUrl}
                name={event.name}
                ticketName={event.ticketName}
                price={event.price}
                buyDate={event.buyDate}
                email={event.email}

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
  </div>)
  // Your component logic remains the same
};

export default EventListCustomer;
