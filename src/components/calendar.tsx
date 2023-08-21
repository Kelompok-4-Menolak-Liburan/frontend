"use client";
import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Calendar = ({
  value,
  disabledDates,
  onChange,
  roundedBottom
}: {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
  roundedBottom?: boolean
}) => {
  return (
    <div className={`flex w-[340px] flex-col overflow-hidden ${roundedBottom ? "rounded-xl" : "rounded-t-xl"} border border-white bg-custom-purple-300 font-poppins text-white`}>
      {/* Render the header */}
      <h2 className="flex w-full items-center  justify-center gap-1 rounded-xl p-2.5 text-center text-base font-bold">
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
