"use client"
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@/components/text-input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()

  // State to animate
  const [mount, setMount] = useState(false);
  const [finish, setFinish] = useState(false);
  const [trapezoid1, setTrapezoid1] = useState(false);
  const [trapezoid2, setTrapezoid2] = useState(false);

  // Input Text State
  const [email, setEmail] = useState("");
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
    <main className="flex h-screen relative w-screen flex-row md:min-h-[450px] font-poppins overflow-hidden">
      {/* Back Button */}
      <button
        aria-label="Back Button"
        onClick={() => router.back()}
        className="absolute top-9 left-7 z-30 flex items-center justify-center md:top-auto md:bottom-14 md:left-12"
      >
        <ArrowLeft size={40} color="#FFFFFF" />
      </button>

      {/* Image */}
      <div
        style={{ backgroundImage: `url(/auth/login-bg.png)` }}
        className={`absolute inset-0 h-full w-full bg-cover bg-center max-sm:top-1/2 max-sm:-translate-y-1/2 transition delay-[2000ms] duration-[700ms] ease-in-out ${mount ? "opacity-0" : "opacity-100"
          } ${finish ? "-z-10" : "z-50"} md:static md:z-20 md:w-1/2 md:opacity-100 md:transition-none flex flex-col gap-4 lg:gap-7 items-center justify-center`}
      >
        <Image src="/logo.png" alt="Logo SeTiket" width={250} height={250} className="w-[100px] lg:w-[250px] aspect-square" />
        <h1 className="text-3xl lg:text-7xl text-[#C5C5C5] font-bold">SeTiket</h1>
      </div>


      <div className="flex relative flex-col w-full md:w-1/2 md:flex-1 items-center">
        {/* Title */}
        <div className="relative md:flex hidden w-full items-center justify-center bg-center">
          {/* Trapezoid Stuff */}
          <Image
            src="/auth/long-trapezoid.svg"
            alt="longTrapezoid"
            width={364}
            height={94}
            className="absolute top-0 left-0 sm:h-[42px] lg:h-[60px] 2xl:h-[80px] w-[150px] lg:w-[200px] 2xl:w-[314px]"
          />
          <Image
            src="/auth/short-trapezoid.svg"
            alt="longTrapezoid"
            width={284}
            height={94}
            className={`absolute top-0 left-[120px] lg:left-[150px] 2xl:left-[246px] sm:h-[42px] lg:h-[60px] 2xl:h-[80px] w-[100px] lg:w-[150px] 2xl:w-[244px] ${trapezoid1 ? "opacity-100" : "opacity-0"
              } transition duration-300 ease-in-out`}
          />
          <Image
            src="/auth/short-trapezoid.svg"
            alt="longTrapezoid"
            width={284}
            height={94}
            className={`absolute top-0 left-[195px] lg:left-[260px] 2xl:left-[419px] sm:h-[42px] lg:h-[60px] 2xl:h-[80px] w-[100px] lg:w-[150px] 2xl:w-[244px] ${trapezoid2 ? "opacity-100" : "opacity-0"
              } transition duration-300 ease-in-out`}
          />
        </div>
        <div className="flex flex-col w-1/2 items-center gap-y-[52px] md:gap-y-[10px] lg:gap-y-[40px] absolute top-1/2 -translate-y-1/2">
          {/* Title */}
          <div className="relative">
            {/* Sparkle */}
            <Image
              className="absolute -top-14 -right-12 z-20 h-24 w-24 animate-sparkle-pulse select-none lg:-top-28 lg:-right-20 lg:h-[175px] lg:w-[175px]"
              src={"/auth/sparkle.webp"}
              priority={true}
              alt="Sparkling Star"
              width={124}
              height={124}
            />
            <h1 className="text-center font-bold text-4xl leading-[135%] tracking-widest text-white lg:text-4xl 2xl:text-5xl">
              LOGIN
            </h1>
            <h2 className="font-gantari-r text-base text-center leading-[135%] tracking-[0.02em] text-white lg:text-lg 2xl:text-lg">
              Sign to continue
            </h2>
          </div>

          {/* Input Form */}
          <form
            method="post"
            className="flex flex-col w-[305px] sm:w-[300px] lg:w-[400px] 2xl:w-[550px] items-center justify-center gap-y-48 md:gap-y-[10px] lg:gap-y-[70px]"
          >
            {/* Form */}
            <div className="flex flex-col gap-y-[10px] w-full">
              <h3 className="text-sm font-semibold leading-[135%] tracking-wider text-white lg:text-base 2xl:text-lg">
                USERNAME
              </h3>
              <TextInput
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
                boxType="password"
                placeholder="Your password"
                fullWidth={true}
                textFieldValue={password}
                setTextFieldValue={setPassword}
              />
            </div>
            {/* Buttons */}
            <div className="flex w-full flex-col gap-y-[15px]">
              <Button fullWidth={true} size="small" color="green-primary" type="submit">
                Log In
              </Button>

              {/* Toggle Login Page */}
              <p className="text-center text-sm leading-none text-white lg:mt-[10px] lg:text-base 2xl:text-lg">
                Don&apos;t an account?
                <Link className="text-custom-green-normal font-bold" href="/login">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

    </main>
  );
};

export default Login;