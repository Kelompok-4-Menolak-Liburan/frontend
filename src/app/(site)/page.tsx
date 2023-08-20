"use client";
import Dropdown from "@/components/drop-down";
import { Metadata } from "next";
import React, { useState } from "react";
export default function Home() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-2 p-24 font-poppins text-white">
      <div className="w-[300px]">
        <Dropdown
          options={options}
          placeholder="Select an option"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </main>
  );
}
