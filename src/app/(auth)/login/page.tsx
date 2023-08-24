"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@/components/text-input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { sendRequest } from "./helper";

const Login = () => {
  const router = useRouter();

  // State to animate
  const [mount, setMount] = useState(false);
  const [finish, setFinish] = useState(false);
  const [trapezoid1, setTrapezoid1] = useState(false);
  const [trapezoid2, setTrapezoid2] = useState(false);

  // Input Text State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Image mounting on mobile
  useEffect(() => {
    setMount(true);
    const timeout = setTimeout(() => setFinish(true), 2700);
    return () => clearTimeout(timeout);
  }, []);

  // Trapezoid animation.
  useEffect(() => {
    const animateTrapezoid = () => {
      setTimeout(() => setTrapezoid1(true), 800);
      setTimeout(() => setTrapezoid2(true), 1900);
      setTimeout(() => {
        setTrapezoid1(false);
        setTrapezoid2(false);
      }, 3000);
    };
    animateTrapezoid();
    const interval = setInterval(animateTrapezoid, 3300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex h-screen w-screen flex-row overflow-hidden font-poppins md:min-h-[450px]">
      {/* Back Button */}
      <button
        aria-label="Back Button"
        onClick={() => router.back()}
        className="absolute left-7 top-9 z-30 flex items-center justify-center md:bottom-14 md:left-12 md:top-auto"
      >
        <ArrowLeft size={40} color="#FFFFFF" />
      </button>

      {/* Image */}
      <div
        style={{ backgroundImage: `url(/auth/login-bg.png)` }}
        className={`absolute inset-0 h-full w-full bg-cover bg-center transition delay-[2000ms] duration-[700ms] ease-in-out max-sm:top-1/2 max-sm:-translate-y-1/2 ${mount ? "opacity-0" : "opacity-100"
          } ${finish ? "-z-10" : "z-50"
          } flex flex-col items-center justify-center gap-4 md:static md:z-20 md:w-1/2 md:opacity-100 md:transition-none lg:gap-7`}
      >
        <Image
          src="/logo.png"
          alt="Logo SeTiket"
          width={250}
          height={250}
          className="aspect-square w-[100px] lg:w-[250px]"
        />
        <h1 className="text-3xl font-bold text-[#C5C5C5] lg:text-7xl">
          SeTiket
        </h1>
      </div>

      <div className="relative flex w-full flex-col items-center md:w-1/2 md:flex-1">
        {/* Title */}
        <div className="relative hidden w-full items-center justify-center bg-center md:flex">
          {/* Trapezoid Stuff */}
          <Image
            src="/auth/long-trapezoid.svg"
            alt="longTrapezoid"
            width={364}
            height={94}
            className="absolute left-0 top-0 w-[150px] sm:h-[42px] lg:h-[60px] lg:w-[200px] 2xl:h-[80px] 2xl:w-[314px]"
          />
          <Image
            src="/auth/short-trapezoid.svg"
            alt="longTrapezoid"
            width={284}
            height={94}
            className={`absolute left-[120px] top-0 w-[100px] sm:h-[42px] lg:left-[150px] lg:h-[60px] lg:w-[150px] 2xl:left-[246px] 2xl:h-[80px] 2xl:w-[244px] ${trapezoid1 ? "opacity-100" : "opacity-0"
              } transition duration-300 ease-in-out`}
          />
          <Image
            src="/auth/short-trapezoid.svg"
            alt="longTrapezoid"
            width={284}
            height={94}
            className={`absolute left-[195px] top-0 w-[100px] sm:h-[42px] lg:left-[260px] lg:h-[60px] lg:w-[150px] 2xl:left-[419px] 2xl:h-[80px] 2xl:w-[244px] ${trapezoid2 ? "opacity-100" : "opacity-0"
              } transition duration-300 ease-in-out`}
          />
        </div>
        <div className="absolute top-1/2 flex w-1/2 -translate-y-1/2 flex-col items-center gap-y-[52px] md:gap-y-[10px] lg:gap-y-[40px]">
          {/* Title */}
          <div className="relative">
            {/* Sparkle */}
            <Image
              className="absolute -right-12 -top-14 z-20 h-24 w-24 animate-sparkle-pulse select-none lg:-right-20 lg:-top-28 lg:h-[175px] lg:w-[175px]"
              src={"/auth/sparkle.webp"}
              priority={true}
              alt="Sparkling Star"
              width={124}
              height={124}
            />
            <h1 className="text-center text-4xl font-bold leading-[135%] tracking-widest text-white lg:text-4xl 2xl:text-5xl">
              LOGIN
            </h1>
            <h2 className="font-gantari-r text-center text-base leading-[135%] tracking-[0.02em] text-white lg:text-lg 2xl:text-lg">
              Sign to continue
            </h2>
          </div>
          <div className="flex flex-col gap-y-[15px]">
            {/* Input Form */}
            <form
              method="post"
              className="flex w-[305px] flex-col items-center justify-center gap-y-48 sm:w-[300px] md:gap-y-[10px] lg:w-[400px] lg:gap-y-[70px] 2xl:w-[550px]"
            >
              {/* Form */}
              <div className="flex w-full flex-col gap-y-[10px]">
                <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                  USERNAME
                </h3>
                <TextInput
                  color="purple"
                  boxType="text"
                  placeholder="Your username"
                  fullWidth={true}
                  textFieldValue={username}
                  setTextFieldValue={setUsername}
                />
                <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                  PASSWORD
                </h3>
                <TextInput
                  color="purple"
                  boxType="password"
                  placeholder="Your password"
                  fullWidth={true}
                  textFieldValue={password}
                  setTextFieldValue={setPassword}
                />
              </div>
              {/* Buttons */}
              <div className="flex w-full flex-col gap-y-[15px]">
                <Button
                  fullWidth={true}
                  size="small"
                  color="green-primary"
                  type="submit"
                  onClick={() => {
                    sendRequest({ username, password });
                  }}
                >
                  Log In
                </Button>
              </div>
            </form>
            {/* Toggle Login Page */}
            <p className="text-center text-sm leading-none text-white lg:mt-[10px] lg:text-base 2xl:text-lg">
              Don&apos;t an account?&nbsp;
              <Link
                className="font-bold text-custom-green-normal"
                href="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
