"use client"
import React, { useState } from "react";
import Dropdown from "@/components/drop-down";
import EventList from "@/components/table/event-list";
import Tabs from "@/components/tabs/tabs";
import TextInput from "@/components/text-input";

interface ManagementListProps {
    no: number;
    imageUrl: string;
    eventName: string;
    status: string
    sold: number;
    view: number;
}

interface ManagementEventClientProps {
    data: ManagementListProps[];
}

const ManagementEventClient: React.FC<ManagementEventClientProps> = ({ data }) => {
    const [search, setSearch] = useState("");
    const [selectedSort, setSelectedSort] = useState("");

    const sortData = (option: string, events: ManagementListProps[]) => {
        const [field, order] = option.split(" ");

        if (field === "Event Name") {
            events.sort((a, b) => (order === "asc" ? a.eventName > b.eventName : a.eventName < b.eventName) ? 1 : -1);
        }
        else if (field === "Sold") {
            events.sort((a, b) => (a.sold - b.sold) * (order === "asc" ? 1 : -1));
        } else if (field === "View") {
            events.sort((a, b) => (a.view - b.view) * (order === "asc" ? 1 : -1));
        }
    };


    const activeEvents = data.filter(event => event.status === "Active");
    const notActiveEvents = data.filter(event => event.status !== "Active");

    if (selectedSort) {
        sortData(selectedSort, activeEvents);
        sortData(selectedSort, notActiveEvents);
    }

    const tabs = [
        { label: "Active", content: <EventList events={activeEvents} /> },
        { label: "Not Active", content: <EventList events={notActiveEvents} /> },
    ];

    const sortOptions = [
        "Event Name (asc)",
        "Event Name (desc)",
        "Sold (asc)",
        "Sold (desc)",
        "View (asc)",
        "View (desc)",
    ];

    return (
        <div className="flex flex-col gap-5 font-poppins text-white w-full">
            <h1 className="text-3xl font-bold">Management Event</h1>
            <div className="flex w-full items-center justify-center gap-5">
                <div className="flex flex-1"><TextInput fullWidth setTextFieldValue={setSearch} textFieldValue={search} placeholder="Search Your Event" boxType="search" color="purple" /></div>
                <div className="flex gap-2 items-center justify-center">
                    <p className="text-base">Sort By:</p>
                    <Dropdown placeholder="Set Your Filters Sort" options={sortOptions} selectedOption={selectedSort} setSelectedOption={setSelectedSort} />
                </div>
            </div>
            <Tabs tabs={tabs} />
            <div className="w-full flex flex-col gap-2 items-center justify-center">
                {/* Render additional components */}
            </div>
        </div>
    );
};

export default ManagementEventClient;
