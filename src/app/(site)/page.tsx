
import Dropdown from "@/components/drop-down";
import Header from "@/components/header";
import { Metadata } from "next";
import React, { useState } from "react";
import { HomeClient } from "./home-client";
import Image from "next/image";
export default function Home() {
  const eventCardData = [

    {
      imageUrl: "/ticket-image.jpg",
      price: 120000,
      eventEndTime: "22:00",
      eventStartTime: "18:00",
      location: "Surabaya, East Java",
      eventName: "East Java",
      eventOrganizer: "MusicMania",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(2023, 9, 5),
      eventEndDate: new Date(2023, 9, 7),
      timeZone: "WIB",
    },
    {
      imageUrl: "/ticket-image.jpg",
      price: 50000,
      eventEndTime: "20:30",
      eventStartTime: "14:00",
      location: "Yogyakarta",
      eventName: "Cultural ",
      eventOrganizer: "HeritageOrg",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(2023, 10, 12),
      eventEndDate: new Date(2023, 10, 14),
      timeZone: "WIB",
    },
    // Continue adding more data for other EventCards
    {
      imageUrl: "/ticket-image.jpg",
      price: 90000,
      eventEndTime: "23:00",
      eventStartTime: "15:00",
      location: "DKI Jakarta",
      eventName: "Joyland Jakarta 2023",
      eventOrganizer: "Compfest",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(),
      eventEndDate: new Date(2023, 8, 20),
      timeZone: "WIB",
    },
    {
      imageUrl: "/ticket-image.jpg",
      price: 75000,
      eventEndTime: "21:30",
      eventStartTime: "13:30",
      location: "Bandung, West Java",
      eventName: "Summer Fest ",
      eventOrganizer: "EventCo",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(2023, 7, 15),
      eventEndDate: new Date(2023, 7, 17),
      timeZone: "WIB",
    },
    {
      imageUrl: "/ticket-image.jpg",
      price: 120000,
      eventEndTime: "22:00",
      eventStartTime: "18:00",
      location: "Surabaya, East Java",
      eventName: "East Java",
      eventOrganizer: "MusicMania",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(2023, 9, 5),
      eventEndDate: new Date(2023, 9, 7),
      timeZone: "WIB",
    },
    {
      imageUrl: "/ticket-image.jpg",
      price: 50000,
      eventEndTime: "20:30",
      eventStartTime: "14:00",
      location: "Yogyakarta",
      eventName: "Cultural ",
      eventOrganizer: "HeritageOrg",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(2023, 10, 12),
      eventEndDate: new Date(2023, 10, 14),
      timeZone: "WIB",
    },
    // Continue adding more data for other EventCards
    {
      imageUrl: "/ticket-image.jpg",
      price: 90000,
      eventEndTime: "23:00",
      eventStartTime: "15:00",
      location: "DKI Jakarta",
      eventName: "Joyland Jakarta 2023",
      eventOrganizer: "Compfest",
      imageEventOrganizerUrl: "/logo.png",
      eventStartDate: new Date(),
      eventEndDate: new Date(2023, 8, 20),
      timeZone: "WIB",
    },
    // Repeat the above structure for a total of 10 EventCards
  ];

  return (
    <main className="flex min-h-full flex-col overflow-hidden items-center justify-between gap-2 px-16 py-12 font-poppins text-white">
      <HomeClient data={eventCardData} />
    </main>
  );
}
