"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import TextInput from "./text-input";
import { Calendar2 } from "iconsax-react";
import Button from "./button";
import Calendar from "./calendar";
import { Range } from "react-date-range";
import Avatar from "./avatar";

interface HeaderProps {
  hastags?: string[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  avatarName?: string;
  avatarRole?: "Customer" | "Event Organizer" | "Administrator";
  placeholder: string;
  avatarImageUrl: string;
  dateRange: Range;
  setDateRange: Dispatch<SetStateAction<Range>>;
}

const Header: React.FC<HeaderProps> = ({
  hastags,
  search,
  setSearch,
  avatarName,
  avatarRole,
  avatarImageUrl,
  placeholder,
  dateRange,
  setDateRange,
}) => {
  // State to manage the visibility of the calendar.
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLButtonElement>(null); // Specify the type of dropdownRef
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="flex w-full flex-col gap-2 lg:gap-4">
      <div className="flex w-full items-center gap-4">
        <div className="flex-1">
          {/* Render the TextInput component for search input. */}
          <TextInput
            color="purple"
            setTextFieldValue={setSearch}
            textFieldValue={search}
            boxType="search"
            placeholder={placeholder}
            fullWidth={true}
          />
        </div>
        <button
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          className="lg:relative"
          ref={calendarRef}
        >
          <Calendar2 size={30} color="#FFFFFF" />

          {/* Render the Calendar component when the calendar is open. */}
          {isCalendarOpen && (
            <div className="absolute left-1/2 top-32 z-[30] -translate-x-1/2 animate-fade-in lg:top-16">
              <Calendar
                value={dateRange}
                onChange={(value) => setDateRange(value.selection)}
              />
            </div>
          )}
        </button>
        {/* Render the avatar section if avatarName and avatarRole are provided, otherwise render registration and login buttons. */}
        {avatarName && avatarRole ? (
          <div className="px-4 max-lg:hidden">
            <Avatar
              size="normal"
              imageUrl={avatarImageUrl}
              role={avatarRole}
              name={avatarName}
            />
          </div>
        ) : (
          <div className="flex gap-2 px-4">
            <Button size="extra-small" color="purple-secondary">
              <span className="font-semibold">Register</span>
            </Button>
            <Button size="extra-small" color="green-primary">
              <span className="font-semibold">Login</span>
            </Button>
          </div>
        )}
      </div>
      <div className="flex w-full flex-wrap gap-3">
        {/* Map and render hashtags if they are provided. */}
        {hastags?.map((item, index) => {
          return (
            <p key={index} className="text-sm text-white">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
