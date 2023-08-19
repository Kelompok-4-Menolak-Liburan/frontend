"use client"
import Switch from "@/components/switch";
import EventDetailsTabs from "../components/tabs/event-details-tabs";
import React, { useState } from 'react';
export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  // Handler to update the state when the switch is toggled
  const handleSwitchChange = (newChecked: boolean) => {
    setIsChecked(newChecked);
  };
  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-between text-white p-24 font-poppins">
      <div className="w-[1000px]">
        <EventDetailsTabs />
        <Switch
          checked={isChecked} // Pass the current state as checked
          onChange={handleSwitchChange} // Pass the handler to update the state
        />
      </div>
    </main>
  );
}
