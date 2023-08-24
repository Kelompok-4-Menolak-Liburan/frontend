"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Image from "next/image";
import Header from "@/components/header";
import React, { useState } from "react";
import TextInput from "@/components/text-input";
import CardDashboard from "@/components/cards/card-dashboard";
import TransactionCharts from "./transactionCharts";
import SuccessCharts from "./successCharts";

export default function EventDetail() {
  const [search, setSearch] = useState("");
  const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reConfirmPassword, setReConfirmPassword] = useState("");

  return (
    <main className="flex min-h-full flex-col gap-2 p-10 font-poppins text-white">
      <h2 className="py-8 text-2xl font-semibold">Dashboard</h2>
      <div className="mb-8 mt-6 flex flex-row gap-6">
        <CardDashboard
          title="Total Keuntungan"
          value="Rp400.0000"
          icon="fa6-solid:money-bill"
          style="primary"
        />
        <CardDashboard
          title="Total Keuntungan"
          value="Rp400.0000"
          icon="fa6-solid:money-bill"
          style="primary"
        />
        <CardDashboard
          title="Total Keuntungan"
          value="Rp400.0000"
          icon="fa6-solid:money-bill"
          style="primary"
        />
        <CardDashboard
          title="Total Event"
          value="1000"
          icon="fa5-solid:calendar-alt"
          style="primary"
        />
      </div>
      <div className="flex flex-row gap-2.5">
        <div className="grow rounded-md bg-custom-purple-500 p-5 shadow-lg ">
          <div className="text-lg font-semibold text-white">
            Transaction Trends
          </div>
          <div className="text-xs font-normal text-neutral-100">
            Terakhir update: 1 April 2023
          </div>
          <TransactionCharts />
        </div>
        <div className="flex-none justify-center self-center rounded-md bg-custom-purple-500 p-5 text-center shadow-lg">
          <h4 className="text-md font-semibold">Total Event</h4>
          <SuccessCharts />
          <p className=" text-black/light  w-64">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
        </div>
      </div>
    </main>
  );
}
