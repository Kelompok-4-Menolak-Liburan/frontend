
import Dropdown from "@/components/drop-down";
import Header from "@/components/header";
import { Metadata } from "next";
import React, { useState } from "react";
import { HomeClient } from "./home-client";
import Image from "next/image";
export default function Home() {

  return (
    <main className="flex min-h-full flex-col items-center justify-between gap-2 p-16 font-poppins text-white">
      <HomeClient data={"asihdashd"} />
    </main>
  );
}
