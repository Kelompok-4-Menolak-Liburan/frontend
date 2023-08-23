"use client"
import React, { useState, useEffect } from "react";
import Dropdown from "@/components/drop-down";
import EventList from "@/components/table/event-table";
import Tabs from "@/components/tabs/tabs";
import TextInput from "@/components/text-input";

interface ManagementListProps {
    imageUrl: string;
    eventName: string;
    status: "active" | "not active";
    sold: number;
    view: number;
}

interface ManagementEventClientProps {
    data: ManagementListProps[];
}

const ManagementEventClient: React.FC<ManagementEventClientProps> = ({ data }) => {
    const [search, setSearch] = useState("");
    const [selectedSort, setSelectedSort] = useState("");
    const [sortedData, setSortedData] = useState<ManagementListProps[]>([]);

    const sortOptions = [
        "Sold asc",
        "Sold desc",
        "View asc",
        "View desc",
    ];

    useEffect(() => {
        // Filter data based on search input
        const filteredData = data.filter(event =>
            event.eventName.toLowerCase().includes(search.toLowerCase())
        );

        let sortedEvents = [...filteredData];

        // Sort the data if a sort option is selected
        if (selectedSort) {
            const [field, order] = selectedSort.split(" ");

            sortedEvents.sort((a, b) => {
                if (field === "Sold") {
                    return order === "asc" ? a.sold - b.sold : b.sold - a.sold;
                } else if (field === "View") {
                    return order === "asc" ? a.view - b.view : b.view - a.view;
                }

                return 0;
            });
        }

        setSortedData(sortedEvents);
    }, [data, search, selectedSort]);

    // Filtering data for tabs
    const activeEvents = sortedData.filter(event => event.status === "active");
    const notActiveEvents = sortedData.filter(event => event.status !== "active");

    const tabs = [
        { label: "All", content: <EventList events={sortedData} searchStatus={search.length > 0} /> },
        { label: "Active", content: <EventList events={activeEvents} searchStatus={search.length > 0} /> },
        { label: "Not Active", content: <EventList events={notActiveEvents} searchStatus={search.length > 0} /> },
    ];



    return (
        <div className="flex flex-col gap-5 font-poppins text-white w-full">
            {/* Text Header */}
            <h1 className="text-xl lg:text-3xl font-bold">Management Event</h1>
            <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-5">
                {/* Search Filters */}
                <div className="flex flex-1 max-lg:w-full"><TextInput fullWidth setTextFieldValue={setSearch} textFieldValue={search} placeholder="Search Your Event" boxType="search" color="purple" /></div>
                {/* Dropdown filitering  */}
                <div className="flex flex-col lg:flex-row gap-2 max-lg:w-full items-center justify-center">
                    <p className="text-sm lg:text-base hidden lg:block">Sort By:</p>
                    <Dropdown placeholder="Set Your Filters Sort" options={sortOptions} selectedOption={selectedSort} setSelectedOption={setSelectedSort} />
                </div>
            </div>
            {/* Tabs Content  */}
            <Tabs tabs={tabs} />
        </div>
    );
};

export default ManagementEventClient;
