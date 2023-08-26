"use client";
import Avatar from "@/components/avatar";
import Button from "@/components/button";
import React, { useState } from "react";
import TextInput from "@/components/text-input";

export default function EventDetail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reConfirmPassword, setReConfirmPassword] = useState("");

  return (
    <main className="flex min-h-full flex-col gap-2 p-10 font-poppins text-white">
      <h2 className="py-8 text-2xl font-semibold">Account Settings</h2>
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex w-full flex-col lg:w-1/2">
          <h3 className="text-xl font-semibold">Basic Information</h3>
          <span className="w-full border-spacing-y-10 border-b"></span>

          <div className="flex flex-col gap-2">
            <h5 className="mt-5 text-lg font-semibold">Profile Picture</h5>
            <div className="mt-5 flex flex-row gap-5">
              <Avatar imageUrl="/logo.png" size="normal" />
              <Button color="green-primary" size="extra-small" type="submit">
                Upload Photo
              </Button>
            </div>
            <span className=" text-sm text-custom-purple-200">
              Your profile picture is recommended to have a 1:1 ratio or no more
              than 2MB in size
            </span>
            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Name
            </h3>
            <TextInput
              color="purple"
              boxType="text"
              placeholder="Your Name"
              fullWidth={true}
              textFieldValue={name}
              setTextFieldValue={setName}
            />
            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Email
            </h3>
            <TextInput
              color="purple"
              boxType="text"
              placeholder="Your Email"
              fullWidth={true}
              textFieldValue={email}
              setTextFieldValue={setEmail}
            />

            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Phone Number
            </h3>
            <TextInput
              color="purple"
              boxType="text"
              placeholder="Your Phone Number"
              fullWidth={true}
              textFieldValue={phoneNumber}
              setTextFieldValue={setPhoneNumber}
            />
            <div className="mt-5 self-center">
              <Button color="green-primary" size="small">
                Update
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-1/2">
          <h3 className="text-xl font-semibold">Change Password</h3>
          <span className="w-full border-spacing-y-10 border-b"></span>

          <div className="flex flex-col gap-2">
            <h3 className="mt-5 font-semibold leading-[135%] tracking-wider text-white selection:text-sm lg:text-base 2xl:text-lg">
              Current Password
            </h3>
            <TextInput
              color="purple"
              boxType="password"
              placeholder="Your Current Password"
              fullWidth={true}
              textFieldValue={password}
              setTextFieldValue={setPassword}
            />
            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              New Password
            </h3>
            <TextInput
              color="purple"
              boxType="password"
              placeholder="Your New Password"
              fullWidth={true}
              textFieldValue={confirmPassword}
              setTextFieldValue={setConfirmPassword}
            />
            <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
              Confirm New Password
            </h3>
            <TextInput
              color="purple"
              boxType="password"
              placeholder="Your New Password"
              fullWidth={true}
              textFieldValue={reConfirmPassword}
              setTextFieldValue={setReConfirmPassword}
            />
            <div className="mt-5 self-center">
              <Button color="green-primary" size="small">
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
