"use client";
import Dropdown from "@/components/drop-down";
import Header from "@/components/header";
import { Metadata } from "next";
import React, { useState } from "react";
export default function Home() {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];
  return (
    <main className="flex min-h-full flex-col items-center justify-between gap-2 p-24 font-poppins text-white">
      <Header
        search={search}
        setSearch={setSearch}
        placeholder="Search Event"
        hastags={hastags}
        avatarImageUrl="/logo.png"
        avatarName="Tes"
        avatarRole="Customer"
      />
    </main>
  );
}
