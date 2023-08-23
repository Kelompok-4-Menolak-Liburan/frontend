"use client"
import React, { useState } from "react";
import ManagementList from "@/components/table/management-list";
import Pagination from "../pagination";

interface Event {
    no: number;
    imageUrl: string;
    eventName: string;
    status: string;
    sold: number;
    view: number;
}

interface EventListProps {
    events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
    const listPerPage = 8; // Number of list per page
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const indexOfLastCard = currentPage * listPerPage;
    const indexOfFirstCard = indexOfLastCard - listPerPage;
    const currentList = events.slice(
        indexOfFirstCard,
        indexOfLastCard
    );
    const numberPage = Math.ceil(events.length / listPerPage);

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="w-full flex gap-16 px-6 font-bold  font-poppins text-white items-center text-lg">
                <h3 className="w-[30px]">No</h3>
                <div className="object-center object-cover rounded-[10px] w-[120px]"></div>
                <h3 className="flex-1">Event Name</h3>
                <h3 className={`capitalize font-semibold w-[150px]`}>Status</h3>
                <h3 className="w-[100px]">Sold</h3>
                <h3 className="w-[100px]">View</h3>
                <h3 className="w-[70px]">Edit Event</h3>
                <h3 className="w-[70px]">See Event</h3>
                <h3 className="w-[70px]">See data</h3>
            </div>
            <div className="w-full flex flex-col gap-2 items-center justify-center">
                {currentList.map((event, index) => (
                    <ManagementList
                        key={event.no}
                        no={indexOfFirstCard + index + 1}
                        imageUrl={event.imageUrl}
                        eventName={event.eventName}
                        status={event.status}
                        sold={event.sold}
                        view={event.view}
                    />
                ))}
            </div>
            <Pagination numberPage={numberPage}
                setCurrentNumberPage={setCurrentPage}
                currentNumberPage={currentPage}
            />
        </div>
    );
};

export default EventList;
