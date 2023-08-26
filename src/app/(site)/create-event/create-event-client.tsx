"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Calendar from "@/components/calendar";
import LocationModal from "@/components/modals/location-modal";
import Switch from "@/components/switch";
import TextInput from "@/components/text-input";
import { formattedEventDate } from "@/libs/utils";
import {
  Calendar as CalendarIcon,
  Clock,
  DocumentUpload,
  Location,
} from "iconsax-react";
import Image from "next/image";
import { useContext, useState } from "react";
import { PopUp } from "../layout";
import Tabs, { TabProps } from "@/components/tabs/tabs";
import TextArea from "@/components/text-area";
import TicketForm from "../../../components/ticket-form";
import TicketTypeCard from "@/components/cards/ticket-type-card";
import {
  TicketState,
  freeTicketInitialState,
  paidTicketInitialState,
  volunterTicketInitialState,
} from "./type";
import Dropdown from "@/components/drop-down";
import { categories } from "@/models/categories";
import { Range } from "react-date-range";
import { timeOptions } from "@/models/time";

interface LocationProps {
  placeName: string;
  city: string;
  fullAddress: string;
  isOnline: boolean;
  urlStreaming: string;
}

export default function CreateEventClient() {
  const setPopUp = useContext(PopUp) as React.Dispatch<
    React.SetStateAction<React.ReactNode | undefined>
  >;
  // State untuk event
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");
  const [imageEventOrganizerUrl, setImageEventOrganizerUrl] = useState("");
  const [imagePosterUrl, setImagePosterUrl] = useState("");
  const [eventOrganizerName, setEventOrganizerName] = useState("");
  const [description, setDescription] = useState("");
  const [termAndCondition, setTermAndCondition] = useState("");

  // State untuk waktu
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");

  // State untuk lokasi
  const [locationState, setLocationState] = useState({
    placeName: "",
    city: "",
    fullAddress: "",
    isOnline: false,
    urlStreaming: "",
  });

  const [freeTicketState, setFreeTicketState] = useState(
    freeTicketInitialState,
  );
  const [volunterTicketState, setVolunterTicketState] = useState(
    volunterTicketInitialState,
  );
  const [paidTicketState, setPaidTicketState] = useState(
    paidTicketInitialState,
  );

  const updateData = (updatedData: LocationProps) => {
    setLocationState(updatedData);
  };

  const handleFreeTicketStateChange = (updatedTicketState: TicketState) => {
    setFreeTicketState(updatedTicketState);
  };

  const handlevolunterTicketStateChange = (updatedTicketState: TicketState) => {
    setVolunterTicketState(updatedTicketState);
  };

  const handlePaidTicketStateChange = (updatedTicketState: TicketState) => {
    setPaidTicketState(updatedTicketState);
  };
  const [selectedTickets, setSelectedTickets] = useState<any[]>([]);

  const tabs: TabProps[] = [
    {
      label: "Free Ticket",
      content: (
        <TicketForm
          initialTicketState={freeTicketState}
          onTicketStateChange={handleFreeTicketStateChange}
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
        />
      ),
    },
    {
      label: "Volunteer Ticket",
      content: (
        <TicketForm
          initialTicketState={volunterTicketState}
          onTicketStateChange={handlevolunterTicketStateChange}
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
        />
      ),
    },
    {
      label: "Paid Ticket",
      content: (
        <TicketForm
          initialTicketState={paidTicketState}
          onTicketStateChange={handlePaidTicketStateChange}
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
        />
      ),
    },
  ];

  const outputLocation = !locationState.isOnline
    ? locationState.placeName
      ? locationState.placeName +
        (locationState.fullAddress
          ? ", " + locationState.fullAddress
          : locationState.city
          ? ", " + locationState.city
          : "")
      : "-"
    : locationState.urlStreaming
    ? locationState.urlStreaming
    : "-";

  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex w-full flex-col overflow-hidden rounded-[20px] border border-white">
        {imagePosterUrl ? (
          <Image
            src={imagePosterUrl}
            alt="Poster"
            width={1000}
            height={300}
            className="h-[300px] w-full object-cover object-center "
          />
        ) : (
          <div className="flex h-[200px] w-full flex-col items-center justify-center gap-4 bg-custom-purple-200 lg:h-[300px]">
            <DocumentUpload size={45} color="#FFFFFF" />
            <h2 className="font-poppins text-base text-white  lg:text-xl">
              Upload event image/poster/banner
            </h2>
          </div>
        )}
        {/* Container text content and calendar */}
        <div className="flex w-full flex-col gap-7 px-4 py-4 lg:flex-row lg:gap-10 lg:px-10 lg:py-8">
          <div className="flex flex-1 flex-col gap-2">
            {/* Event Name */}
            <div className="flex items-center">
              <span className="font-poppins text-2xl font-bold text-red-600">
                *
              </span>
              <TextInput
                textFieldValue={eventName}
                setTextFieldValue={setEventName}
                fullWidth={true}
                color="transparent-bold"
                required
                placeholder="Event Name"
                boxType="text"
              />
            </div>
            {/* Filters */}
            <button className="flex items-center gap-4 px-1" type="button">
              Categories:{" "}
              <Dropdown
                options={categories}
                placeholder="Select The Category Event"
                setSelectedOption={setCategory}
                selectedOption={category}
              />
            </button>

            {/* Line */}
            <hr className="my-1 h-[1px] bg-white"></hr>
            <div className="flex items-center gap-2">
              <CalendarIcon size={20} color="#FFFFFF" />
              <h3 className="font-poppins text-sm text-white lg:text-base">
                Date:{" "}
                {dateRange.startDate &&
                  formattedEventDate(dateRange.startDate, dateRange.endDate)}
              </h3>
            </div>
            <button
              className="flex items-center gap-2"
              type="button"
              // onClick={() => setPopUp(<TimeModal />)}
            >
              <Clock size={20} color="#FFFFFF" />
              <Dropdown
                options={timeOptions}
                selectedOption={timeStart}
                setSelectedOption={setTimeStart}
                placeholder="Start Time"
              />
              <Dropdown
                options={timeOptions}
                selectedOption={timeEnd}
                setSelectedOption={setTimeEnd}
                placeholder="End Time"
              />
            </button>
            <button
              className="flex items-center gap-2"
              type="button"
              onClick={() =>
                setPopUp(<LocationModal updateLocation={updateData} />)
              }
            >
              <Location size={20} color="#FFFFFF" />
              <h3 className="font-poppins text-sm text-white lg:text-base">
                Location: {outputLocation}
              </h3>
            </button>
            {/* Line */}
            <hr className="my-1 h-[1px] bg-white"></hr>
            {/* Event Organizer */}
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="font-poppins text-base font-bold text-white lg:text-lg">
                Organized By:{" "}
              </h3>
              <div className="flex items-center gap-3">
                <Avatar
                  imageUrl={
                    imagePosterUrl ? imagePosterUrl : "/profile-icon.jpg"
                  }
                  size="small"
                />
                <TextInput
                  textFieldValue={eventOrganizerName}
                  setTextFieldValue={setEventOrganizerName}
                  placeholder="Name Organization"
                  boxType="text"
                  color="transparent"
                />
              </div>
              <div className="flex gap-3">
                <p className="text-sm text-custom-purple-200 lg:text-base">
                  Use Default Account
                </p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="max-lg:overflow-x-scroll sm:flex sm:items-center sm:justify-center">
            <Calendar
              value={dateRange}
              roundedBottom
              onChange={(value) => setDateRange(value.selection)}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="font-poppins text-2xl font-bold text-white underline">
          Your Tickets Type
        </h2>
        <div className="flex w-full flex-wrap gap-4">
          {selectedTickets.map((item, index) => (
            <TicketTypeCard
              key={index}
              ticketName={item.ticketName.value}
              ticketAmount={item.ticketAmount.value}
              dateSale={item.dateSale.value}
              price={item.price.value}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 ">
        <Tabs tabs={tabs} centered></Tabs>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-poppins text-2xl font-bold text-white underline">
          Event Description
        </h2>
        <TextArea
          textFieldValue={description}
          setTextFieldValue={setDescription}
          placeholder="Input your text heres"
          fullWidth
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-poppins text-2xl font-bold text-white underline">
          Term and Conditions
        </h2>
        <TextArea
          setTextFieldValue={setTermAndCondition}
          textFieldValue={termAndCondition}
          placeholder="Input your text heres"
          fullWidth
        />
      </div>
      <div className="fixed bottom-0 right-0 flex w-full items-center justify-center rounded-tl-[20px] bg-custom-purple-100 py-2 font-poppins text-white max-lg:px-5 lg:w-[80%]">
        <div className="flex w-full items-center justify-center gap-3 lg:gap-6">
          <p className="text-xs lg:text-sm">
            Follow the intruction to create yout event
          </p>
          <Button size="extra-small" color="purple-secondary" type="button">
            Cancel
          </Button>
          <Button size="extra-small" color="green-primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
