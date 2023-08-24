"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Image from "next/image";
import Header from "@/components/header";
import EventDetailsTabs from "@/components/tabs/event-details-tabs";
import { Calendar2, Clock, Location, ShoppingCart } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getEventDetail } from "./helper";
import { EventDetail } from "./types";
import { fetcherGet } from "@/libs/fetcher";
import toast from "react-hot-toast";

export default function EventDetail() {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];

  // const ticketDatas = {
  //   eventName: "Joyland Jakarta 2023",
  //   location: "Monas, DKI Jakarta",
  //   date: "24, 25, 26 November 2023",
  //   Time: "15:00 - 23:00 WIB",
  //   lowerPrice: "Rp. 150.000",
  //   organizer: "Compfest",
  //   description: "Music and arts festival held outdoors in open green spaces.",
  //   rules: "These are the rules.",
  //   ticket_type: [
  //     {
  //       price: 150000,
  //       ticketName: "PRESALE 1 : 3 Day Pass Reguler Entry",
  //       terms: [
  //         "Harga belum termasuk biaya pajak",
  //         "Tiket berlaku untuk 3 hari (Jum'at - Minggu, 24 - 26 November 2023)",
  //       ],
  //     },
  //     {
  //       price: 150000,
  //       ticketName: "PRESALE 1 : 3 Day Pass Reguler Entry",
  //       terms: [
  //         "Harga belum termasuk biaya pajak",
  //         "Tiket berlaku untuk 3 hari (Jum'at - Minggu, 24 - 26 November 2023)",
  //       ],
  //     },
  //     {
  //       price: 150000,
  //       ticketName: "PRESALE 1 : 3 Day Pass Reguler Entry",
  //       terms: [
  //         "Harga belum termasuk biaya pajak",
  //         "Tiket berlaku untuk 3 hari (Jum'at - Minggu, 24 - 26 November 2023)",
  //       ],
  //     },
  //   ],
  // };

  const [ticketData, setTicketData] = useState<EventDetail>({
    title: "",
    image_url: "",
    description: "",
    start_date: "",
    end_date: "",
    place_name: "",
    city: "",
    full_address: "",
    location: "",
    category: "",
    organizer: "",
    ticket_type: [],
  });

  const id = "6a6bcee1-5c3f-4177-943d-7ffa7fe709e9";

  const [ticketSelected, setTicketSelected] = useState(0);

  const getEventDetail = async () => {
    try {
      const response = await fetcherGet(`api/event/${id}/?format=json`);
      setTicketData(response);
    } catch (error) {
      toast.error("Event not found!");
    }
  };

  useEffect(() => {
    getEventDetail() as unknown as EventDetail;
  }, []);

  return (
    <main className="flex min-h-full flex-col gap-2 p-10 font-poppins text-white">
      {/* <Header
        search={search}
        setSearch={setSearch}
        placeholder="Search Event"
        hastags={hastags}
        avatarImageUrl="/logo.png"
        avatarName="Tes"
        avatarRole="Customer"
      /> */}
      <Image
        src="/banner.jpeg"
        className="h-full w-full rounded-2xl lg:hidden"
        width={500}
        height={500}
        alt={""}
      />
      <div className="flex flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-16 ">
        <div className="flex h-full w-full flex-col gap-6">
          <Image
            src="/banner.jpeg"
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
            {/* <div className="flex flex-row items-center gap-2">
              <Clock variant="Linear" color="#fff" size={24} />
              <div>
                <h4 className="text-base font-bold text-white">Time</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  {ticketData.Time}
                </span>
              </div>
            </div> */}
            <div className="flex flex-row justify-between">
              <h4 className="text-sm  text-white">Price start from</h4>
              <span className="text-sm font-bold text-white">
                {/* {ticketData.lowerPrice} */}
                Rp. 150.000
              </span>
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
