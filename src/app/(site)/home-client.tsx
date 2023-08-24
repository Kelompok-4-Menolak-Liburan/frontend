"use client";
import Button from "@/components/button";
import EventCard from "@/components/cards/event-card";
import Dropdown from "@/components/drop-down";
import Header from "@/components/header";
import ImageSlider from "@/components/image-slider";
import React, { useState } from "react";
import { Range } from "react-date-range";
import { EventData } from "./type";
import { categories } from "@/models/categories";
import { cities } from "@/models/cities";

export const HomeClient = ({ data }: { data: EventData[] }) => {

  // ImageUrls for background carousels
  const imageUrls: string[] = data.map(event => event.image_url).slice(0, 5);

  // State for search input
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];

  // State to manage the selected date range.
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selectedDate, setSelectedDate] = useState<undefined | Range>(
    undefined,
  );

  // State for selected city and category
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Filtering logic based on search, city, and category
  const filteredData = data.filter((item) => {
    const includesNameSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const includesLocationSearch = item.city
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesLocation = !selectedCity || item.city.toLowerCase().includes(selectedCity.toLowerCase());

    const matchesCategory =
      !selectedCategory || item.category?.toLowerCase().includes(selectedCategory.toLowerCase());

    // Add the date range filtering condition
    const startDate = selectedDate?.startDate;
    const endDate = selectedDate?.endDate;
    const eventStartDate = new Date(item.start_date);

    // Check if the event date range is within the selected range (if available)
    const withinDateRange =
      !startDate ||
      !endDate ||
      (eventStartDate >= startDate);

    // Include the event if any of the filter conditions match
    return (
      (includesNameSearch || includesLocationSearch) &&
      matchesCategory && matchesLocation &&
      (withinDateRange || selectedDate === undefined)
    );
  });


  const dropdownData = [
    {
      options: categories,
      placeholder: "Categories",
      selectedOption: selectedCategory,
      setSelectedOption: setSelectedCategory,
    },
    {
      options: cities,
      placeholder: "City",
      selectedOption: selectedCity,
      setSelectedOption: setSelectedCity,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4 lg:gap-4">
      {/* Header component */}
      <Header
        dateRange={dateRange}
        setDateRange={setDateRange}
        search={search}
        setSearch={setSearch}
        placeholder="Select an event name or event location"
        hastags={hastags}
        avatarImageUrl="/logo.png"
        avatarName="Tes"
        setSelectedDate={setSelectedDate}
        avatarRole="Customer"
      />

      {/* Image slider or dropdowns */}
      {!search ? (
        <ImageSlider imageArrayUrls={imageUrls} />
      ) : (
        <div className="flex flex-wrap items-center  gap-3">
          {dropdownData.map((item, index) => {
            return (
              <Dropdown
                key={index}
                options={item.options}
                placeholder={item.placeholder}
                selectedOption={item.selectedOption}
                setSelectedOption={item.setSelectedOption}
              />
            );
          })}
        </div>
      )}
      {/* Display search results or upcoming events */}
      <div className="flex flex-col justify-between gap-4 pt-2 lg:flex-row lg:items-center lg:pt-4">
        {search ? (
          // Display search results header
          <h2 className="font-poppins text-lg font-bold text-white lg:text-xl">
            Search results for &quot;{search}&quot;
          </h2>
        ) : (
          // Display upcoming events header
          <>
            <h1 className="font-poppins text-xl font-bold text-white lg:text-2xl">
              Upcoming Events
            </h1>
            <div className="flex flex-wrap items-center  gap-3">
              {dropdownData.map((item, index) => {
                return (
                  <Dropdown
                    key={index}
                    options={item.options}
                    placeholder={item.placeholder}
                    selectedOption={item.selectedOption}
                    setSelectedOption={item.setSelectedOption}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Display event cards or "Not found" message */}
      {filteredData.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((event, index) => (
            <EventCard
              key={index}
              id={event.id}
              title={event.title}
              image_url={event.image_url}
              start_date={event.start_date}
              city={event.city}
              organizer={event.organizer}
            />
          ))}
        </div>
      ) : (
        <h3 className="items-center justify-center  pt-4 text-center font-poppins text-2xl font-bold text-custom-green-normal lg:text-2xl ">
          Not found results
        </h3>
      )}

      {/* Display "Delete Filters" button */}
      {(selectedCategory || selectedCity) && (
        <div className="flex w-full items-center justify-center pt-4">
          <Button
            size="extra-small"
            color="green-primary"
            onClick={() => {
              setSelectedCategory("");
              setSelectedCity("");
            }}
          >
            Delete the filters
          </Button>
        </div>
      )}
    </div>
  );
};
