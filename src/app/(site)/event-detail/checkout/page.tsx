"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Image from "next/image";
import Header from "@/components/header";
import EventDetailsTabs from "@/components/tabs/event-details-tabs";
import { Calendar2, Clock, Location } from "iconsax-react";
import React, { useState } from "react";
import PurchaseTicket from "@/components/cards/purchase-ticket-card";
import TextInput from "@/components/text-input";

export default function EventDetail() {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payMethod, setPayMethod] = useState("BCA");

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
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-6">
        <div className="flex h-full w-full flex-col gap-2">
          <Image
            src="/banner.jpeg"
            className="hidden h-full w-full rounded-2xl lg:block"
            width={400}
            height={400}
            alt={""}
          />
          <div className="flex w-full flex-col gap-4 rounded-xl bg-custom-purple-300 p-5 ">
            <h2 className="text-xl font-bold text-white">
              Joyland Jakarta 2023
            </h2>
            <div className="flex flex-row items-center gap-2">
              <Location variant="Linear" color="#fff" size={18} />
              <span className="text-sm font-normal leading-[18.20px] text-white">
                Monas, DKI Jakarta
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Calendar2 variant="Linear" color="#fff" size={18} />
              <div>
                <h4 className="text-base font-bold text-white">Date</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  24, 25, 26 November 2023
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Clock variant="Linear" color="#fff" size={18} />
              <div>
                <h4 className="text-base font-bold text-white">Time</h4>
                <span className="text-[13px] font-normal leading-[18.20px] text-white">
                  15:00 - 23:00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-3 rounded-xl bg-custom-purple-300 p-7">
            <h2 className="text-xl font-bold text-white">Information Buyer</h2>
            <div className="flex w-full flex-col gap-y-[10px]">
              <h3 className="text-sm leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                Full Name
              </h3>
              <TextInput
                color="gray"
                boxType="text"
                placeholder="Your Name"
                fullWidth={true}
                textFieldValue={name}
                setTextFieldValue={setName}
              />
              <h3 className="text-sm leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                Email
              </h3>
              <TextInput
                color="gray"
                boxType="email"
                placeholder="Your email"
                fullWidth={true}
                textFieldValue={email}
                setTextFieldValue={setEmail}
              />
              <h3 className="text-sm leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                Phone Number
              </h3>
              <TextInput
                color="gray"
                boxType="number"
                placeholder="Your phone number"
                fullWidth={true}
                textFieldValue={phoneNumber}
                setTextFieldValue={setPhoneNumber}
              />
              <h3 className="text-sm leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                Payment Method
              </h3>
              <div className="flex flex-row gap-2">
                <input
                  type="radio"
                  id="BCA"
                  name="payment"
                  value="BCA"
                  checked={payMethod === "BCA"}
                  onChange={(e) => setPayMethod(e.target.value)}
                />
                <label htmlFor="BCA">BCA</label>

                <input
                  type="radio"
                  id="BNI"
                  name="payment"
                  value="BNI"
                  checked={payMethod === "BNI"}
                  onChange={(e) => setPayMethod(e.target.value)}
                />
                <label htmlFor="BNI">BNI</label>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-xl bg-custom-purple-300 p-7">
            <h2 className="text-3xl font-bold text-white">Detail Harga</h2>
            <div className="flex flex-row justify-between gap-2 text-gray-300">
              <h4 className="pr-5 text-xs">
                PRESALE 1 : 3 Day Pass Reguler Entry
              </h4>
              <span className="w-60 text-right text-xs font-semibold">
                Rp. 150.000 x 1
              </span>
            </div>
            <div className="flex flex-row justify-between text-gray-300">
              <h4 className="text-xs lg:text-sm">Service Fees</h4>
              <span className="font-semi text-xs lg:text-sm ">Rp. 3.000</span>
            </div>
            <span className="w-full border-spacing-y-10 border-b"></span>
            <div className="flex flex-row justify-between">
              <h4 className="text-xs text-white lg:text-sm">Total Price</h4>
              <span className="text-xs font-semibold text-white lg:text-sm">
                Rp. 153.000
              </span>
            </div>
            <Button color="green-primary" size="normal" fullWidth>
              Buy Ticket Now
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
