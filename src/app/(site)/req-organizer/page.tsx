"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Image from "next/image";
import Header from "@/components/header";
import React, { useState } from "react";
import TextInput from "@/components/text-input";
import { DocumentUpload } from "iconsax-react";

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
      <h2 className="py-8 text-2xl font-semibold">Request Event Organizer</h2>
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
              <label className="hover:bg-blue flex w-full cursor-pointer flex-col items-center rounded-lg bg-custom-purple-300 px-4 py-6  tracking-wide shadow-lg hover:text-custom-purple-100">
                <DocumentUpload variant="Linear" size="24" color="#fff" />
                <span className="mt-2 text-center text-xs lg:text-base">
                  Click or drag file to this area to uploud proposal
                </span>
                <input type="file" className="hidden" />
              </label>
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
