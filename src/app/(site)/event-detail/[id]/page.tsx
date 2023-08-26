/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { Range } from "react-date-range";
import { Calendar2, Clock, Location, ShoppingCart } from "iconsax-react";

import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Header from "@/components/header";
import { fetcherGet } from "@/libs/fetcher";
import EventDetailsTabs from "@/components/tabs/event-details-tabs";

import { EventDetail } from "./types";

export default function EventDetail() {
  const router = useRouter();
  const { id } = useParams();

  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];

  const [ticketData, setTicketData] = useState<EventDetail>({
    title: "",
    image_url: "",
    description: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    place_name: "",
    city: "",
    full_address: "",
    location: "",
    category: "",
    organizer: "",
    ticket_type: [],
  });

  const [ticketSelected, setTicketSelected] = useState(0);
  const [lowerPrice, setLowerPrice] = useState(0);

  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selectedDate, setSelectedDate] = useState<undefined | Range>(
    undefined,
  );

  const getEventDetail = async () => {
    try {
      const response = await fetcherGet(`api/event/${id}/?format=json`);

      response.start_date = new Date(response.start_date).toLocaleDateString(
        "id-ID",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      );

      response.end_date = new Date(response.end_date).toLocaleDateString(
        "id-ID",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      );

      setTicketData(response);
    } catch (error) {
      toast.error("Event not found!");
      router.push("/");
    }
  };

  useEffect(() => {
    getEventDetail() as unknown as EventDetail;
  }, []);

  useEffect(() => {
    if (ticketData.ticket_type.length > 0) {
      setLowerPrice(ticketData.ticket_type[0].price);
    }
  }, [ticketData]);

  return (
    <main className="flex min-h-full flex-col gap-2 p-10 font-poppins text-white">
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
      <Image
        src={ticketData.image_url}
        className="h-full w-full rounded-2xl lg:hidden"
        width={500}
        height={500}
        alt={""}
      />
      <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-16 ">
        <div className="flex h-full w-full flex-col gap-6">
          <Image
            src={ticketData.image_url}
            className="hidden h-full w-full rounded-2xl lg:block"
            width={500}
            height={500}
            alt={""}
          />
          <EventDetailsTabs
            description={ticketData.description}
            purchase={ticketData.ticket_type}
          />
          <div className="fixed bottom-0 h-[50px] w-[812px]">
            <div className="row-span-2 flex flex-row items-center justify-between rounded-t-xl bg-custom-purple-200 bg-opacity-80 px-6 py-2">
              <span className="flex flex-row items-center gap-4 text-sm font-semibold text-custom-purple-75">
                <ShoppingCart variant="Linear" color="#fff" size={24} />3 Ticket
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-sm font-bold text-custom-purple-75">
                    Total
                  </span>
                  <span className="text-sm font-semibold text-custom-purple-75">
                    Rp. 450.000
                  </span>

                  <Button color="green-primary" size="extra-small">
                    Cancel
                  </Button>

                  <Link href="/event-detail/checkout">
                    <Button color="green-primary" size="extra-small">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col gap-4 rounded-xl bg-custom-purple-300 p-7 lg:w-80">
            <h2 className="text-3xl font-bold text-white">
              {ticketData.title}
            </h2>
            <div className="flex flex-row items-center gap-2">
              <Location variant="Linear" color="#fff" size={24} />
              <span className="text-sm font-normal leading-[18.20px] text-white">
                {ticketData.location}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Calendar2 variant="Linear" color="#fff" size={24} />
              <div>
                <h4 className="text-base font-bold text-white">Date</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  {ticketData.start_date} - {ticketData.end_date}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Clock variant="Linear" color="#fff" size={24} />
              <div>
                <h4 className="text-base font-bold text-white">Time</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  {ticketData.start_time.slice(0, 5)} WIB -{" "}
                  {ticketData.end_time.slice(0, 5)} WIB
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <h4 className="text-sm  text-white">Price start from</h4>
              <span className="text-sm font-bold text-white">{lowerPrice}</span>
            </div>

            <Button color="green-primary" size="normal" fullWidth>
              See Ticket
            </Button>
          </div>
          <div className="flex flex-row items-center gap-4 rounded-xl bg-custom-purple-300 p-5">
            <Avatar size="normal" imageUrl="/logo.png" />
            <div className="mt-[-8px]">
              <span className="text-xs text-custom-purple-75">
                Organized by
              </span>
              <h3 className="text-lg font-semibold leading-4 text-white">
                {ticketData.organizer}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
