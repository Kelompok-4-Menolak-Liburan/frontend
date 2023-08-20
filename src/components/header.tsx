"use client"
import { Dispatch, SetStateAction, useState } from "react";
import TextInput from "./text-input";
import { Calendar2 } from "iconsax-react";
import Button from "./button";
import Calendar from "./calendar";
import { Range } from "react-date-range";
import Avatar from "./avatar";

interface HeaderProps {
    hastags?: string[]
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
    avatarName?: string;
    avatarRole?: "Customer" | "Event Organizer" | "Administrator";
    placeholder: string;
    avatarImageUrl: string
}

const Header: React.FC<HeaderProps> = ({ hastags, search, setSearch, avatarName, avatarRole, avatarImageUrl, placeholder }) => {
    // State to manage the visibility of the calendar.
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    // State to manage the selected date range.
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    return (<div className="flex flex-col gap-4 w-full">
        <div className="flex w-full items-center gap-4">
            <div className="flex-1">
                {/* Render the TextInput component for search input. */}
                <TextInput color="purple" setTextFieldValue={setSearch} textFieldValue={search} boxType="search" placeholder={placeholder} fullWidth={true} />
            </div>
            <button onClick={() => setIsCalendarOpen(!isCalendarOpen)} className="relative">
                <Calendar2 size={30} color="#FFFFFF" />

                {/* Render the Calendar component when the calendar is open. */}
                {isCalendarOpen &&
                    <div className="absolute left-1/2 -translate-x-1/2 top-16 animate-fade-in">
                        <Calendar
                            value={dateRange}
                            onChange={(value) => setDateRange(value.selection)}
                        />
                    </div>
                }
            </button>
            {/* Render the avatar section if avatarName and avatarRole are provided, otherwise render registration and login buttons. */}
            {avatarName && avatarRole ?
                <div className="px-4">
                    <Avatar size="normal" imageUrl={avatarImageUrl} role={avatarRole} name={avatarName} />
                </div> :
                <div className="flex gap-2 px-4">
                    <Button size="extra-small" color="purple-secondary">
                        <span className="font-semibold">Register</span>
                    </Button>
                    <Button size="extra-small" color="green-primary">
                        <span className="font-semibold">Login</span>
                    </Button>
                </div>
            }
        </div>
        <div className="flex gap-3 flex-wrap w-full">
            {/* Map and render hashtags if they are provided. */}
            {hastags?.map((item, index) => {
                return <p key={index} className="text-base text-white">{item}</p>;
            })}
        </div>
    </div>)
}
export default Header