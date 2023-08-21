"use client";
import Button from "@/components/button";
import EventCard from "@/components/cards/event-card";
import Dropdown from "@/components/drop-down";
import Header from "@/components/header";
import ImageSlider from "@/components/image-slider";
import React, { useState } from "react";
import { Range } from "react-date-range";

// Define the expected structure of event data
interface EventCardData {
  imageUrl: string;
  price: number;
  eventEndTime: string;
  eventStartTime: string;
  location: string;
  eventName: string;
  eventOrganizer: string;
  imageEventOrganizerUrl: string;
  eventStartDate: Date;
  eventEndDate: Date;
  timeZone: string;
  topic: string;
  category: string;
}
export const HomeClient = ({ data }: { data: EventCardData[] }) => {
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

  // State for selected topic and category
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Filtering logic based on search, topic, and category
  const filteredData = data.filter((item) => {
    const includesNameSearch = item.eventName
      .toLowerCase()
      .includes(search.toLowerCase());
    const includesLocationSearch = item.location
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesTopic =
      !selectedTopic ||
      item.topic.toLowerCase().includes(selectedTopic.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());

    // Add the date range filtering condition
    const startDate = selectedDate?.startDate;
    const endDate = selectedDate?.endDate;
    const eventStartDate = new Date(item.eventStartDate);
    const eventEndDate = new Date(item.eventEndDate);

    // Check if the event date range is within the selected range (if available)
    const withinDateRange =
      !startDate ||
      !endDate ||
      (eventStartDate >= startDate && eventEndDate <= endDate);

    // Include the event if any of the filter conditions match
    return (
      includesNameSearch &&
      matchesTopic &&
      matchesCategory &&
      includesLocationSearch &&
      (withinDateRange || selectedDate === undefined) // Include if withinDateRange is undefined or selectedDate is undefined
    );
  });

  // Lists of categories and topics for dropdowns
  const categories = [
    "Festival, Fair, Bazaar",
    "Konser",
    "Pertandingan",
    "Exhibition, Expo, Pameran",
    "Konferensi",
    "Seni, Budaya",
    "Workshop",
    "Pertunjukan",
    "Atraksi, Theme Park",
    "Akomodasi",
    "Seminar, Talk Show",
    "Social Gathering",
    "Training, Sertifikasi, Ujian",
    "Pensi, Event Sekolah, Kampus",
    "Trip, Tur",
    "Turnamen, Kompetisi",
    "Lainnya",
  ];
  const topics = [
    "Anak, Keluarga",
    "Bisnis",
    "Desain, Foto, Video",
    "Fashion, Kecantikan",
    "Film, Sinema",
    "Game, E-Sports",
    "Hobi, Kerajinan Tangan",
    "Investasi, Saham",
    "Karir, Pengembangan Diri",
    "Keagamaan",
    "Kesehatan, Kebugaran",
    "Keuangan, Finansial",
    "Lingkungan Hidup",
    "Makanan, Minuman",
    "Marketing",
    "Musik",
    "Olahraga",
    "Otomotif",
    "Sains, Teknologi",
    "Seni, Budaya",
    "Sosial, Hukum, Politik",
    "Standup Comedy",
    "Pendidikan, Beasiswa",
    "Tech, Start-Up",
    "Wisata & Liburan",
    "Lainnya",
  ];

  const dropdownData = [
    {
      options: categories,
      placeholder: "Categories",
      selectedOption: selectedCategory,
      setSelectedOption: setSelectedCategory,
    },
    {
      options: topics,
      placeholder: "Topics",
      selectedOption: selectedTopic,
      setSelectedOption: setSelectedTopic,
    },
  ];

  // Dummy image data for the image slider
  const dummyImages = [
    {
      imageUrl: "/ticket-image.jpg",
      imageAlt: "Image 1",
      imageWidth: 700,
      imageHeight: 300,
    },
    {
      imageUrl: "/logo.png",
      imageAlt: "Image 2",
      imageWidth: 700,
      imageHeight: 300,
    },
    {
      imageUrl: "/auth/login-bg.png",
      imageAlt: "Image 3",
      imageWidth: 700,
      imageHeight: 300,
    },
    // Tambahkan data gambar lainnya sesuai kebutuhan
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
        <ImageSlider imageArray={dummyImages} />
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
              imageUrl={event.imageUrl}
              price={event.price}
              eventEndTime={event.eventEndTime}
              eventStartTime={event.eventStartTime}
              location={event.location}
              eventName={event.eventName}
              eventOrganizer={event.eventOrganizer}
              imageEventOrganizerUrl={event.imageEventOrganizerUrl}
              eventStartDate={event.eventStartDate}
              eventEndDate={event.eventEndDate}
              timeZone={event.timeZone}
            />
          ))}
        </div>
      ) : (
        <h3 className="items-center justify-center  pt-4 text-center font-poppins text-2xl font-bold text-custom-green-normal lg:text-2xl ">
          Not found results
        </h3>
      )}

      {/* Display "Delete Filters" button */}
      {(selectedCategory || selectedTopic) && (
        <div className="flex w-full items-center justify-center pt-4">
          <Button
            size="extra-small"
            color="green-primary"
            onClick={() => {
              setSelectedCategory("");
              setSelectedTopic("");
            }}
          >
            Delete the filters
          </Button>
        </div>
      )}
    </div>
  );
};
