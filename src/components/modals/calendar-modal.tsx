"use client"
import React, { useState, useContext, useEffect, useRef } from 'react';
import { PopUp } from '@/app/(site)/layout';
import Calendar from '../calendar';
import { Range, RangeKeyDict } from 'react-date-range';

interface CalendarModalProps {
    dateRange: Range
    onChange: (value: RangeKeyDict) => void;
}


export default function CalendarModal({ dateRange, onChange }: CalendarModalProps) {
    const setPopUp = useContext(PopUp) as React.Dispatch<
        React.SetStateAction<React.ReactNode | undefined>
    >;

    const blackBgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                blackBgRef.current &&
                blackBgRef.current.contains(event.target as Node)
            ) {
                setPopUp(undefined);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setPopUp]);


    return (
        <>
            <div className='flex flex-col gap-2 w-fit fixed top-1/2 z-[100] animate-fade-in -translate-y-1/2 right-1/2 translate-x-1/2 bg-custom-purple-400 rounded-[20px] border border-white px-5 lg:px-10 py-6 font-poppins text-white'>
                <Calendar value={dateRange} onChange={(value) => { onChange(value); }} />
            </div>
            <div ref={blackBgRef} className='bg-[#3a3a3a] bg-opacity-40 fixed z-[99] top-0 right-0 w-screen h-screen'></div>
        </>
    );
}
