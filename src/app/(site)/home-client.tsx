"use client";
import Button from "@/components/button";
import EventCard from "@/components/cards/event-card";
import Dropdown from "@/components/drop-down";
import Header from "@/components/header";
import ImageSlider from "@/components/image-slider";
import React, { useState } from "react";
import { Range } from "react-date-range";

// import required modules
type EventCardData = {
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
};
export const HomeClient = ({ data }: { data: EventCardData[] }) => {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];
  // State to manage the selected date range.
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredData = data.filter((item) => {
    const includesSearch = item.eventName.includes(search);
    const matchesTopic = !selectedTopic || item.topic.includes(selectedTopic);
    const matchesCategory =
      !selectedCategory || item.category.includes(selectedCategory);

    return includesSearch && matchesTopic && matchesCategory;
  });

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
      {" "}
      <Header
        dateRange={dateRange}
        setDateRange={setDateRange}
        search={search}
        setSearch={setSearch}
        placeholder="Search Event"
        hastags={hastags}
        avatarImageUrl="/logo.png"
        avatarName="Tes"
        avatarRole="Customer"
      />
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
      <div className="lg:items-center flex flex-col justify-between gap-9 pt-2 lg:flex-row lg:pt-4">
        {search ? (
          <h2 className="font-poppins text-lg font-bold text-white lg:text-xl">
            Search results for &quot;{search}&quot;
          </h2>
        ) : (
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
      {filteredData.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
