"use client";
import React, { useState, useContext, useEffect, useRef } from "react";
import { PopUp } from "@/app/(site)/layout";
import Calendar from "../calendar";
import { Range, RangeKeyDict } from "react-date-range";

interface CalendarModalProps {
  dateRange: Range;
  onChange: (value: RangeKeyDict) => void;
}

export default function CalendarModal({
  dateRange,
  onChange,
}: CalendarModalProps) {
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
      <div className="fixed right-1/2 top-1/2 z-[100] flex w-fit -translate-y-1/2 translate-x-1/2 animate-fade-in flex-col gap-2 rounded-[20px] border border-white bg-custom-purple-400 px-5 py-6 font-poppins text-white lg:px-10">
        <Calendar
          value={dateRange}
          onChange={(value) => {
            onChange(value);
          }}
        />
      </div>
      <div
        ref={blackBgRef}
        className="fixed right-0 top-0 z-[99] h-screen w-screen bg-[#3a3a3a] bg-opacity-40"
      ></div>
    </>
  );
}
