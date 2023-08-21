"use client"
import Button from '@/components/button';
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
    topic: string;
    category: string;
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
    const [selectedTopic, setSelectedTopic] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const filteredData = data.filter(item => {
        const includesSearch = item.eventName.includes(search);
        const matchesTopic = !selectedTopic || item.topic.includes(selectedTopic);
        const matchesCategory = !selectedCategory || item.category.includes(selectedCategory);

        return includesSearch && matchesTopic && matchesCategory;
    });

    const categories = [
        "Festival, Fair, Bazaar",
        "Konser",
        "Pertandingan",
        "Exhibition, Expo, Pameran",
        "Konferensi",
        "Workshop",
        "Pertunjukan",
        "Atraksi, Theme Park",
        "Akomodasi",
        "Seminar, Talk Show",
        "Social Gathering",
        "Training, Sertifikasi, Ujian",
        "Pensi, Event Sekolah, Kampus",
        "Trip, Tur",
        "Turnamen, Kompetisi",
        "Lainnya"
    ]
    const topics = [
        "Anak, Keluarga",
        "Bisnis",
        "Desain, Foto, Video",
        "Fashion, Kecantikan",
        "Film, Sinema",
        "Game, E-Sports",
        "Hobi, Kerajinan Tangan",
        "Investasi, Saham",
        "Karir, Pengembangan Diri",
        "Keagamaan",
        "Kesehatan, Kebugaran",
        "Keuangan, Finansial",
        "Lingkungan Hidup",
        "Makanan, Minuman",
        "Marketing",
        "Musik",
        "Olahraga",
        "Otomotif",
        "Sains, Teknologi",
        "Seni, Budaya",
        "Sosial, Hukum, Politik",
        "Standup Comedy",
        "Pendidikan, Beasiswa",
        "Tech, Start-Up",
        "Wisata & Liburan",
        "Lainnya"
    ]


    const dropdownData = [
        {
            options: categories,
            placeholder: 'Select an option',
            selectedOption: selectedCategory,
            setSelectedOption: setSelectedCategory
        },
        {
            options: topics,
            placeholder: 'Select an option',
            selectedOption: selectedTopic,
            setSelectedOption: setSelectedTopic
        },

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
        <div className='flex flex-col w-full gap-4 lg:gap-6'> <Header
            dateRange={dateRange}
            setDateRange={setDateRange}
            search={search}
            setSearch={setSearch}
            placeholder="Search Event"
            hastags={hastags}
            avatarImageUrl="/logo.png"
            avatarName="Tes"
            avatarRole="Customer"
        />{!search ?
            <ImageSlider imageArray={dummyImages} />
            : <div className='flex gap-3 items-center  flex-wrap'>
                {dropdownData.map((item, index) => {
                    return <Dropdown key={index} options={item.options} placeholder={item.placeholder} selectedOption={item.selectedOption} setSelectedOption={item.setSelectedOption} />
                })}
            </div>}

            <div className='flex flex-col lg:flex-row justify-between lf:items-center gap-4 pt-2 lg:pt-4'>
                {search ?
                    <h2 className='text-white font-poppins text-lg lg:text-xl font-bold'>Search results for &quot;{search}&quot;</h2>
                    :
                    <>
                        <h1 className='text-white font-poppins text-xl lg:text-3xl font-bold'>Upcoming Events</h1>
                        <div className='flex gap-3 items-center  flex-wrap'>
                            {dropdownData.map((item, index) => {
                                return <Dropdown key={index} options={item.options} placeholder={item.placeholder} selectedOption={item.selectedOption} setSelectedOption={item.setSelectedOption} />
                            })}
                        </div>
                    </>
                }
            </div>
            {filteredData.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 w-full">
                    {filteredData.map((event, index) => (
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

                : <h3 className='text-center text-custom-green-normal  items-center justify-center text-2xl pt-4 font-bold lg:text-3xl font-poppins '>Not found results</h3>}
            {(selectedCategory || selectedTopic) &&
                <div className='w-full flex items-center justify-center'>

                    <Button size='extra-small' color='green-primary' onClick={() => { setSelectedCategory(""); setSelectedTopic("") }}>Delete the filters</Button>
                </div>
            }
        </div>
    )
}
