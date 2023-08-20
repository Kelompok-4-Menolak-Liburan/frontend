"use client"
import Header from '@/components/header';
import Image from 'next/image';
import React, { useState } from 'react'
import { Range } from 'react-date-range';

export const HomeClient = ({ data }: { data: any }) => {
    const [search, setSearch] = useState("")
    // State to manage the visibility of the calendar.
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];
    // State to manage the selected date range.
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    return (
        <div className='flex flex-col w-full'> <Header
            dateRange={dateRange}
            setDateRange={setDateRange}
            search={search}
            setSearch={setSearch}
            placeholder="Search Event"
            hastags={hastags}
            avatarImageUrl="/logo.png"
            avatarName="Tes"
            avatarRole="Customer"
        /><Image src="/ticket-image.jpg" width={700} height={100} alt="Image" className='w-full h-[350px] rounded-3xl object-center object-cover'></Image>
            <div className="flex flex-wrap"></div></div>
    )
}
