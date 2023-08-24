"use client";
import React, { useState, useEffect } from "react";
import Dropdown from "@/components/drop-down";
import EventList from "@/components/table/event-table";
import Tabs from "@/components/tabs/tabs";
import TextInput from "@/components/text-input";
import EventListCustomer from "@/components/table/event-table-customer";

interface ManagementClientCustomerProps {
  no: number;
  imageUrl: string;
  email: string;
  name: string;
  ticketName: string;
  buyDate: Date;
  price?: number;
  isFree?: boolean;
}

interface ManagementCustomerEventClientProps {
  data: ManagementClientCustomerProps[];
}

const ManagementEventClient: React.FC<ManagementCustomerEventClientProps> = ({
  data,
}) => {
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [sortedData, setSortedData] = useState<ManagementClientCustomerProps[]>(
    [],
  );

  const sortOptions = ["Date asc", "Date desc", "Price asc", "Price desc"];

  useEffect(() => {
    const filteredData = data.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase()),
    );

    // Apply date filter
    let sortedFilteredData = [...filteredData];
    if (selectedSort === "Date asc") {
      sortedFilteredData.sort(
        (a, b) => a.buyDate.getTime() - b.buyDate.getTime(),
      );
    } else if (selectedSort === "Date desc") {
      sortedFilteredData.sort(
        (a, b) => b.buyDate.getTime() - a.buyDate.getTime(),
      );
    }

    // Apply price filter
    if (selectedSort === "Price asc") {
      sortedFilteredData.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (selectedSort === "Price desc") {
      sortedFilteredData.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    setSortedData(sortedFilteredData);
  }, [data, search, selectedSort]);

  return (
    <div className="flex w-full flex-col gap-5 font-poppins text-white">
      {/* Text Header */}
      <h1 className="text-xl font-bold lg:text-3xl">Management Event</h1>
      <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
        {/* Search Filters */}
        <div className="flex flex-1 max-lg:w-full">
          <TextInput
            fullWidth
            setTextFieldValue={setSearch}
            textFieldValue={search}
            placeholder="Search Your Event"
            boxType="search"
            color="purple"
          />
        </div>
        {/* Dropdown filitering  */}
        <div className="flex flex-col items-center justify-center gap-2 max-lg:w-full lg:flex-row">
          <p className="hidden text-sm lg:block lg:text-base">Sort By:</p>
          <Dropdown
            placeholder="Set Your Filters Sort"
            options={sortOptions}
            selectedOption={selectedSort}
            setSelectedOption={setSelectedSort}
          />
        </div>
      </div>
      {/* Tabs Content  */}
      <EventListCustomer events={sortedData} searchStatus={search.length > 0} />
    </div>
  );
};

export default ManagementEventClient;
