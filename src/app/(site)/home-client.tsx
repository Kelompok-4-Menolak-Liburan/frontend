"use client"
import EventCard from '@/components/cards/event-card';
import Dropdown from '@/components/drop-down';
import Header from '@/components/header';
import ImageSlider from '@/components/image-slider';
import React, { useState } from 'react'
import { Range } from 'react-date-range';


// import required modules
type EventCardData = {
    imageUrl: string;
    price: number;
    eventEndTime: string;
    eventStartTime: string;
    location: string;
    eventName: string;
    eventOrganizer: string;
    imageEventOrganizerUrl: string;
    eventStartDate: Date;
    eventEndDate: Date;
    timeZone: string;
};
export const HomeClient = ({ data }: { data: EventCardData[] }) => {
    const [search, setSearch] = useState("")
    const hastags = ["#LoketMusik", "#LOKETHITZ", "#TES233434"];
    // State to manage the selected date range.
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });
    const dropdownData = [
        {
            options: ['Option 1', 'Option 2', 'Option 3'],
            placeholder: 'Select an option',
            selectedOption: 'Option 1',
            setSelectedOption: () => { },
        },
        {
            options: ['Choice A', 'Choice B', 'Choice C'],
            selectedOption: 'Choice B',
            setSelectedOption: () => { },
        },
        {
            options: ['Apple', 'Banana', 'Orange', 'Grapes'],
            placeholder: 'Choose a fruit',
            selectedOption: 'Banana',
            setSelectedOption: () => { },
        },
        // ... Add more data for other DropdownProps
    ];


    const dummyImages = [
        {
            imageUrl: "/ticket-image.jpg",
            imageAlt: "Image 1",
            imageWidth: 700,
            imageHeight: 300,
        },
        {
            imageUrl: "/logo.png",
            imageAlt: "Image 2",
            imageWidth: 700,
            imageHeight: 300,
        },
        {
            imageUrl: "/auth/login-bg.png",
            imageAlt: "Image 3",
            imageWidth: 700,
            imageHeight: 300,
        },
        // Tambahkan data gambar lainnya sesuai kebutuhan
    ];

    return (
        <div className='flex flex-col w-full gap-6'> <Header
            dateRange={dateRange}
            setDateRange={setDateRange}
            search={search}
            setSearch={setSearch}
            placeholder="Search Event"
            hastags={hastags}
            avatarImageUrl="/logo.png"
            avatarName="Tes"
            avatarRole="Customer"
        />
            <ImageSlider imageArray={dummyImages} />

            <div className='flex justify-between items-center pt-4'>
                <h1 className='text-white font-poppins text-3xl font-bold'>Upcoming Events</h1>
                <div className='flex gap-3 items-center justify-center'>
                    {dropdownData.map((item, index) => {
                        return <Dropdown key={index} options={item.options} placeholder={item.placeholder} selectedOption={item.selectedOption} setSelectedOption={item.setSelectedOption} />
                    })}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-10 w-full">
                {data.map((event, index) => (
                    <EventCard
                        key={index}
                        imageUrl={event.imageUrl}
                        price={event.price}
                        eventEndTime={event.eventEndTime}
                        eventStartTime={event.eventStartTime}
                        location={event.location}
                        eventName={event.eventName}
                        eventOrganizer={event.eventOrganizer}
                        imageEventOrganizerUrl={event.imageEventOrganizerUrl}
                        eventStartDate={event.eventStartDate}
                        eventEndDate={event.eventEndDate}
                        timeZone={event.timeZone}
                    />
                ))}
            </div>
        </div>
    )
}
