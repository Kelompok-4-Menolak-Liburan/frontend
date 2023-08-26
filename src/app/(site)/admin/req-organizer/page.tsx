"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Image from "next/image";
import Header from "@/components/header";
import React, { useState } from "react";
import TextInput from "@/components/text-input";
import CardDashboard from "@/components/cards/card-dashboard";
import BackButton from "@/components/backButton";

export default function EventDetail() {
  const [search, setSearch] = useState("");

  const data = {
    name: "Loket Musik",
    category: ["Music", "Festival"],
    location: "Jakarta",
    description:
      "Loket Musik adalah sebuah platform yang menyediakan layanan pembelian tiket konser musik secara online. Loket Musik juga menyediakan layanan untuk membeli merchandise dari artis yang akan mengadakan konser, ",
  };

  const total = Object.keys(data).length;

  return (
    <main className="flex min-h-full flex-col gap-2 p-10 font-poppins text-white">
      <div className="flex flex-row gap-3">
        <BackButton text={false} />
        <h2 className="py-8 text-2xl font-semibold">Account Event Organizer</h2>
      </div>
      <h3 className=" text-xl font-semibold">Name Event Organizer</h3>
      <p className="text-base">{data.name}</p>
      <h3 className=" text-xl font-semibold">Category</h3>
      <p className="text-base">{data.category}</p>
      <h3 className=" text-xl font-semibold">Location</h3>
      <p className="text-base">{data.location}</p>
      <h3 className=" text-xl font-semibold">Description</h3>
      <p className="text-base">{data.description}</p>
    </main>
  );
}
