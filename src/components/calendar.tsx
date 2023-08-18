"use client";
import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Calendar = ({
  value,
  disabledDates,
  onChange,
}: {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}) => {
  return (
    <div className="flex flex-col w-[340px] bg-custom-purple-300 font-poppins overflow-hidden text-white border border-white rounded-xl">
      {/* Render the header */}
      <h2 className="font-bold text-center p-2.5  text-base rounded-xl gap-1 flex w-full items-center justify-center">
        <span className="text-red-600">*</span>
        Select Date Event
      </h2>
      {/* Render the 'DateRange' component from the 'react-date-range' library */}
      <DateRange
        rangeColors={["#13A696"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
        className="text-lg text-black"
      />
    </div>
  );
};

export default Calendar;
