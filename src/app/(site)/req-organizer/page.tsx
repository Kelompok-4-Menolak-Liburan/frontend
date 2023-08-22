"use client";
import Button from "@/components/button";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Header from "@/components/header";
import React, { useState } from "react";
import TextInput from "@/components/text-input";
import { DocumentUpload, InfoCircle } from "iconsax-react";

export default function EventDetail() {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

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
      <h2 className="py-8 text-2xl font-semibold">
        Request Event Organizer -{" "}
        <span
          className="inline-flex cursor-pointer gap-1 text-lg font-bold text-red-500"
          data-tooltip-id="my-tooltip-2"
        >
          Rejected
          <InfoCircle size={18} color="#ef4444" />
        </span>
      </h2>

      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        variant="info"
        style={{
          wordBreak: "break-all",
          overflowWrap: "break-word",
          width: 500,
          backgroundColor: "#1e223e",
        }}
        content="Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet Karena lorem ipsum dolor sit amet"
      />
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Name Event Organizer
            </h3>
            <TextInput
              color="purple"
              boxType="text"
              placeholder="Your Name"
              fullWidth={true}
              textFieldValue={name}
              setTextFieldValue={setName}
            />
            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Location Event Organizer
            </h3>
            <TextInput
              color="purple"
              boxType="text"
              placeholder="Your Location"
              fullWidth={true}
              textFieldValue={location}
              setTextFieldValue={setLocation}
            />

            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Description
            </h3>
            <div className="h-40">
              <TextInput
                color="purple"
                boxType="textarea"
                placeholder="Your Description Event"
                fullWidth={true}
                textFieldValue={description}
                setTextFieldValue={setDescription}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="mt-5 font-semibold leading-[135%] tracking-wider text-white selection:text-sm lg:text-base 2xl:text-lg">
                Uploud Proposal
              </h3>
              <input
                type="file"
                className="block w-full rounded-full border
                            border-slate-500 text-sm text-slate-500
                            file:mr-4 file:rounded-full
                            file:border-0 file:bg-violet-50
                            file:px-4 file:py-2
                            file:text-sm
                            file:font-semibold file:text-custom-purple-300 hover:file:bg-violet-100
                            "
              />
            </div>
            <div className="mt-5 self-center">
              <Button color="green-primary" size="small">
                Uploud Proposal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
