import Switch from '@/components/switch';
import EventDetailsTabs from '@/components/tabs/event-details-tabs';
import { Metadata } from 'next';
import React, { useState } from 'react';
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-between text-white p-24 font-poppins">
      <div className="w-[1000px]">
        <EventDetailsTabs />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "SeTiket",
  description:
    "Registration",
  generator: "Next.js",
  applicationName: "SeTiket",
  colorScheme: "dark"
}