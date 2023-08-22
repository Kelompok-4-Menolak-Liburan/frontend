"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Image from "next/image";
import Header from "@/components/header";
import EventDetailsTabs from "@/components/tabs/event-details-tabs";
import { Calendar2, Clock, Location } from "iconsax-react";
import React, { useState } from "react";

export default function EventDetail() {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];
  return (
    <main className="flex min-h-full flex-col gap-2 p-10 font-poppins text-white">
      <Header
        search={search}
        setSearch={setSearch}
        placeholder="Search Event"
        hastags={hastags}
        avatarImageUrl="/logo.png"
        avatarName="Tes"
        avatarRole="Customer"
      />
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
          <EventDetailsTabs />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col gap-4 rounded-xl bg-custom-purple-300 p-7 lg:w-80">
            <h2 className="text-3xl font-bold text-white">
              Joyland Jakarta 2023
            </h2>
            <div className="flex flex-row items-center gap-2">
              <Location variant="Linear" color="#fff" size={24} />
              <span className="text-sm font-normal leading-[18.20px] text-white">
                Monas, DKI Jakarta
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Calendar2 variant="Linear" color="#fff" size={24} />
              <div>
                <h4 className="text-base font-bold text-white">Date</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  24, 25, 26 November 2023
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Clock variant="Linear" color="#fff" size={24} />
              <div>
                <h4 className="text-base font-bold text-white">Time</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  15:00 - 23:00 WIB
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <h4 className="text-sm  text-white">Price start from</h4>
              <span className="text-sm font-bold text-white">Rp. 150.000</span>
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
                Compfest
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
