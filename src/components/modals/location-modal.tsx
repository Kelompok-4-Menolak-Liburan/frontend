"use client";
import React, { useState, useContext, useEffect, useRef } from "react";
import Switch from "../switch";
import TextInput from "../text-input";
import Button from "../button";
import { PopUp } from "@/app/(site)/layout";

interface LocationModalProps {
  updateLocation: (updatedLocation: LocationProps) => void;
}

interface LocationProps {
  placeName: string;
  city: string;
  fullAddress: string;
  isOnline: boolean;
  urlStreaming: string;
}

export default function LocationModal({ updateLocation }: LocationModalProps) {
  const setPopUp = useContext(PopUp) as React.Dispatch<
    React.SetStateAction<React.ReactNode | undefined>
  >;

  const [location, setLocation] = useState<LocationProps>({
    placeName: "",
    city: "",
    fullAddress: "",
    isOnline: false,
    urlStreaming: "",
  });

  const blackBgef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        blackBgef.current &&
        blackBgef.current.contains(event.target as Node)
      ) {
        setPopUp(undefined);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setPopUp]);

  const handleFieldChange = (
    fieldName: keyof LocationProps,
    value: string | boolean,
  ) => {
    const updatedLocation = { ...location, [fieldName]: value };
    setLocation(updatedLocation);
    updateLocation(updatedLocation);
  };

  return (
    <>
      <div className="fixed right-1/2 top-1/2 z-[100] flex w-[80%] max-w-[300px] -translate-y-1/2 translate-x-1/2 animate-fade-in flex-col gap-2 rounded-[20px] border border-white bg-custom-purple-400 px-5 py-6 font-poppins text-white lg:max-w-[480px] lg:px-10">
        <h3 className="Location text-center text-base font-bold lg:text-xl">
          Location
        </h3>
        <hr className="h-[1px] bg-white" />
        <div className="flex flex-col gap-3">
          <div className="flex gap-5 ">
            <h4 className="text-sm font-semibold lg:text-base">
              Online Event?
            </h4>
            <Switch
              onChange={(isChecked) => handleFieldChange("isOnline", isChecked)}
            />
          </div>
          {location.isOnline ? (
            <div className="flex flex-col ">
              <h4 className="text-sm font-semibold lg:text-base">
                URL Streaming:{" "}
              </h4>
              <TextInput
                fullWidth
                textFieldValue={location.urlStreaming}
                setTextFieldValue={(value: string) =>
                  handleFieldChange("urlStreaming", value)
                }
                placeholder=""
                color="transparent-border"
                boxType="text"
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col ">
                <h4 className="text-sm font-semibold lg:text-base">
                  Place Name:{" "}
                </h4>
                <TextInput
                  fullWidth
                  textFieldValue={location.placeName}
                  setTextFieldValue={(value: string) =>
                    handleFieldChange("placeName", value)
                  }
                  placeholder=""
                  color="transparent-border"
                  boxType="text"
                />
              </div>
              <div className="flex flex-col ">
                <h4 className="text-sm font-semibold lg:text-base">City: </h4>
                <TextInput
                  fullWidth
                  textFieldValue={location.city}
                  setTextFieldValue={(value: string) =>
                    handleFieldChange("city", value)
                  }
                  placeholder=""
                  color="transparent-border"
                  boxType="text"
                />
              </div>
              <div className="flex flex-col ">
                <h4 className="text-sm font-semibold lg:text-base">
                  Full Address:{" "}
                </h4>
                <TextInput
                  fullWidth
                  textFieldValue={location.fullAddress}
                  setTextFieldValue={(value: string) =>
                    handleFieldChange("fullAddress", value)
                  }
                  placeholder=""
                  color="transparent-border"
                  boxType="text"
                />
              </div>
            </>
          )}
          <div className="flex w-full items-center justify-center">
            <Button
              size="extra-small"
              color="green-primary"
              onClick={() => setPopUp(undefined)}
            >
              Select Location
            </Button>
          </div>
        </div>
      </div>
      <div
        ref={blackBgef}
        className="fixed right-0 top-0 z-[99] h-screen w-screen bg-[#3a3a3a] bg-opacity-40"
      ></div>
    </>
  );
}
