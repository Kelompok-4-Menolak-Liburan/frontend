"use client";
import Avatar from "@/components/avatar";
import BulletList from "@/components/bullet-list";
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
import { Range } from "react-date-range";
import { PopUp } from "../layout";
import Tabs from "@/components/tabs/tabs";
import TextArea from "@/components/text-area";
import TimeModal from "@/components/modals/time-modal";
import TicketForm from "../../../components/ticket-form";
import CalendarModal from "@/components/modals/calendar-modal";
import TicketTypeCard from "@/components/cards/ticket-type-card";
interface TicketState {
  [key: string]: {
    value: string;
    placeholder: string;
    title: string;
  };
}
interface Tab {
  label: string;
  content: JSX.Element;
}
interface LocationProps {
  placeName: string;
  city: string;
  fullAddress: string;
  isOnline: boolean;
  urlStreaming: string;
}

const freeTicketInitialState: TicketState = {
  ticketName: {
    value: "",
    placeholder: "Enter your Ticket Name",
    title: "Ticket Name",
  },
  ticketAmount: {
    value: "",
    placeholder: "Enter the Ticket Amount",
    title: "Ticket Amount",
  },
  ticketDescription: {
    value: "",
    placeholder: "Enter the Ticket Description",
    title: "Ticket Description",
  },
  startDateSale: {
    value: "",
    placeholder: "Select the Start Date of Sale",
    title: "Start Date of Sale",
  },
  endDateSale: {
    value: "",
    placeholder: "Select the End Date of Sale",
    title: "End Date of Sale",
  },
};

const volunterTicketInitialState: TicketState = {
  ticketName: {
    value: "",
    placeholder: "Enter your Ticket Name",
    title: "Ticket Name",
  },
  ticketAmount: {
    value: "",
    placeholder: "Enter the Ticket Amount",
    title: "Ticket Amount",
  },
  ticketDescription: {
    value: "",
    placeholder: "Enter the Ticket Description",
    title: "Ticket Description",
  },
  startDateSale: {
    value: "",
    placeholder: "Select the Start Date of Sale",
    title: "Start Date of Sale",
  },
  endDateSale: {
    value: "",
    placeholder: "Select the End Date of Sale",
    title: "End Date of Sale",
  },
};

const paidTicketInitialState: TicketState = {
  ticketName: {
    value: "",
    placeholder: "Enter your Ticket Name",
    title: "Ticket Name",
  },
  ticketAmount: {
    value: "",
    placeholder: "Enter the Ticket Amount",
    title: "Ticket Amount",
  },
  startPrice: {
    value: "",
    placeholder: "Enter the Starting Price",
    title: "Starting Price",
  },
  startDateSale: {
    value: "",
    placeholder: "Select the Start Date of Sale",
    title: "Start Date of Sale",
  },
  endDateSale: {
    value: "",
    placeholder: "Select the End Date of Sale",
    title: "End Date of Sale",
  },
  ticketDescription: {
    value: "",
    placeholder: "Enter the Ticket Description",
    title: "Ticket Description",
  },
  price: { value: "", placeholder: "Enter the Price", title: "Price" },
};

export default function CreateEventClient() {
  const setPopUp = useContext(PopUp) as React.Dispatch<
    React.SetStateAction<React.ReactNode | undefined>
  >;
  const [eventState, setEventState] = useState({
    eventName: "",
    category: "",
    topic: "",
    tag: [],
    imageEventOrganizerUrl: "",
    imagePosterUrl: "",
    eventOrganizerName: "",
    description: "",
    termAndCondition: "",
  });

  const [timeState, setTimeState] = useState({
    dateRange: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
    timeStart: "",
    timeEnd: "",
  });

  const [locationState, setLocationState] = useState({
    placeName: "",
    city: "",
    fullAddress: "",
    isOnline: false,
    urlStreaming: "",
  });

  const [freeTicketState, setFreeTicketState] = useState<TicketState>(
    freeTicketInitialState,
  );
  const [volunterTicketState, setVolunterTicketState] = useState<TicketState>(
    volunterTicketInitialState,
  );
  const [paidTicketState, setPaidTicketState] = useState<TicketState>(
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

  const tabs: Tab[] = [
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
      label: "Relawan Ticket",
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

  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex w-full flex-col overflow-hidden rounded-[20px] border border-white">
        {eventState.imagePosterUrl ? (
          <Image
            src={eventState.imagePosterUrl}
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
                textFieldValue={eventState.eventName}
                setTextFieldValue={(value: string) => {
                  setEventState({ ...eventState, eventName: value });
                }}
                fullWidth={true}
                color="transparent-bold"
                required
                placeholder="Event Name"
                boxType="text"
              />
            </div>
            {/* Filters */}
            <button className="flex px-1" type="button">
              <BulletList
                style="flex flex-col lg:flex-row items-start  font-poppins text-white text-sm gap-1 lg:text-base lg:gap-10"
                items={["Category", "Topic", "Tag1, Tag2, Tag3"]}
              />
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
                    eventState.imagePosterUrl
                      ? eventState.imagePosterUrl
                      : "/profile-icon.jpg"
                  }
                  size="small"
                />
                <TextInput
                  textFieldValue={eventState.eventOrganizerName}
                  setTextFieldValue={(value: string) => {
                    setEventState({ ...eventState, eventOrganizerName: value });
                  }}
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
            <button
              className="flex items-center gap-2"
              type="button"
              onClick={() => {
                setPopUp(
                  <CalendarModal
                    dateRange={timeState.dateRange}
                    onChange={(value) =>
                      setTimeState((prevTimeState) => ({
                        ...prevTimeState,
                        dateRange: {
                          ...prevTimeState.dateRange,
                          startDate:
                            value.selection?.startDate ||
                            prevTimeState.dateRange.startDate,
                          endDate:
                            value.selection?.endDate ||
                            prevTimeState.dateRange.endDate,
                        },
                      }))
                    }
                  />,
                );
              }}
            >
              <CalendarIcon size={20} color="#FFFFFF" />
              <h3 className="font-poppins text-sm text-white lg:text-base">
                Date:{" "}
                {timeState.dateRange.startDate &&
                  formattedEventDate(
                    timeState.dateRange.startDate,
                    timeState.dateRange.endDate,
                  )}
              </h3>
            </button>

            <button
              className="flex items-center gap-2"
              type="button"
              onClick={() => setPopUp(<TimeModal />)}
            >
              <Clock size={20} color="#FFFFFF" />
              <h3 className="font-poppins text-sm text-white lg:text-base">
                Time: {timeState.timeStart}-{timeState.timeEnd}{" "}
              </h3>
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
                Location:{" "}
                {locationState.placeName ? locationState.placeName : "-"}
              </h3>
            </button>
          </div>
          <div className="max-lg:hidden">
            <Calendar
              value={timeState.dateRange}
              roundedBottom
              onChange={(value) =>
                setTimeState((prevTimeState) => ({
                  ...prevTimeState,
                  dateRange: {
                    ...prevTimeState.dateRange,
                    startDate:
                      value.selection?.startDate ||
                      prevTimeState.dateRange.startDate,
                    endDate:
                      value.selection?.endDate ||
                      prevTimeState.dateRange.endDate,
                  },
                }))
              }
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
              dateSaleStart={item.startDateSale.value}
              dateSaleEnd={item.endDateSale.value}
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
          textFieldValue={eventState.description}
          setTextFieldValue={(value: string) => {
            setEventState({ ...eventState, description: value });
          }}
          placeholder="Input your text heres"
          fullWidth
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-poppins text-2xl font-bold text-white underline">
          Term and Conditions
        </h2>
        <TextArea
          setTextFieldValue={(value: string) => {
            setEventState({ ...eventState, termAndCondition: value });
          }}
          textFieldValue={eventState.termAndCondition}
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
