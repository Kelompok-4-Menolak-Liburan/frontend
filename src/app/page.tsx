"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Calendar from "@/components/calendar";
import { EmojiHappy } from "iconsax-react";
import { useState } from "react";
import { Range } from "react-date-range";

export default function Home() {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white p-24 font-poppins">
      stias sed in illum id perspiciatis, harum, quod, reiciendis facilis facere
      distinctio quia! Expedita, temporibus voluptatem modi molestiae unde sit
      recusandae nam, est iure nobis assumenda nesciunt minus. Dolorum
      aspernatur consequuntur in temporibus asperiores deserunt laboriosam, modi
      doloribus et maxime officiis laborum voluptas earum, optio quasi voluptate
      aliquid ad odit facilis minima nemo non consequatur illum? Quisquam qui et
      odit cupiditate hic accusamus nihil, quis eaque, iste accusantium libero
      totam. Provident nobis ad eaque atque a non accusantium asperiores illo,
      sapiente autem deleniti eligendi explicabo sed, aliquid, similique
      reprehenderit maxime tempore commodi ea quos harum nulla. Ipsa atque
      repudiandae officia dolores voluptatum exercitationem quas architecto ut.
      Facilis tempore quae dolorem ea natus amet eaque, dignissimos fugiat
      beatae adipisci, recusandae, iusto ratione? Excepturi saepe quidem aliquid
      minus voluptatem quasi provident ad harum reprehenderit laudantium minima
      molestias veniam, quos molestiae ex.
      {/* Usage */}
      <Calendar
        value={dateRange}
        onChange={(value) => setDateRange(value.selection)}
      />
      <Avatar size="normal" imageUrl="/logo.png" name="Name" role="Customer"/>
      {dateRange && dateRange.startDate && dateRange.endDate && (
        <p className="text-white text-xl font-poppins font-bold">
          {dateRange.startDate.toLocaleDateString()}
          {dateRange.startDate.getTime() !== dateRange.endDate.getTime() && (
            <> - {dateRange.endDate.toLocaleDateString()}</>
          )}
        </p>
      )}
      <EmojiHappy color="red" />
      <Button
        size="small"
        color="green-primary"
        type="button"
        disabled
        onClick={() => {
          alert("P");
        }}
      >
        Primary Button
      </Button>
    </main>
  );
}
