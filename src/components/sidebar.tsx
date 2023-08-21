"use client";
import {
  Star1,
  Ticket,
  Repeat,
  Setting,
  LogoutCurve,
  HambergerMenu,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// An array of navigation items, each containing an icon, label, and href.
const navigationItems = [
  { icon: Star1, label: "Favorites", href: "/favorites" },
  { icon: Ticket, label: "Ticket", href: "/ticket" },
  { icon: Repeat, label: "History", href: "/history" },
  { icon: Setting, label: "Settings", href: "/settings" },
];

const Sidebar = () => {
  // Using the usePathname hook to get the current pathname
  const pathname = usePathname();
  const [isExpand, setIsExpand] = useState(false);

  // Side Bar background ref
  const sideBarBgRef = useRef<HTMLDivElement>(null);

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        sideBarBgRef.current &&
        sideBarBgRef.current.contains(event.target as Node)
      ) {
        setIsExpand(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsExpand]);
  return (
    <nav className="overflow-hidden">
      <div className="fixed top-0 z-[40] flex w-full items-center bg-custom-purple-500 px-6 py-3 lg:hidden">
        <div className="relative flex w-full items-center">
          <button onClick={() => setIsExpand(!isExpand)} className="">
            <HambergerMenu size="40" color="#FFFFFF" />
          </button>
          <Image
            src="/logo.png"
            width={30}
            height={30}
            alt="Logo"
            className="absolute left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <div
        className={`fixed z-50 flex ${
          isExpand
            ? "max-lg:translate-x-0"
            : "pointer-events-none max-lg:-translate-x-full"
        } h-screen max-w-[200px] flex-col items-center justify-between rounded-r-[40px] bg-custom-purple-500 p-[65px] font-poppins text-white transition duration-300 lg:max-w-[303px]`}
      >
        {/* Sidebar header */}
        <h1 className="text-2xl font-bold lg:text-[33px]">SeTiket</h1>

        {/* Navigation items list */}
        <ul className="flex flex-col gap-3">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={`rounded-full transition duration-300 hover:bg-custom-purple-300 ${
                pathname.toLowerCase().includes(item.href.toLowerCase()) ||
                pathname.toLowerCase() === item.href.toLowerCase()
                  ? "bg-custom-purple-300"
                  : "bg-transparent"
              }`}
            >
              {/* Link to the respective navigation item */}
              <Link
                href={item.href}
                className="flex items-center gap-3 px-6 py-3"
              >
                {/* Displaying the icon with dynamic variant based on the active status */}
                {
                  <item.icon
                    size="28"
                    color="#FFFFFF"
                    variant={`${
                      pathname
                        .toLowerCase()
                        .includes(item.href.toLowerCase()) ||
                      pathname.toLowerCase() === item.href.toLowerCase()
                        ? "Bold"
                        : "Outline"
                    }`}
                  />
                }
                <h2 className="text-base lg:text-[19px]">{item.label}</h2>
              </Link>
            </li>
          ))}
        </ul>
        {/* Logout button */}
        <button className="rounded-full transition duration-300 hover:bg-custom-purple-300">
          <Link href="/tes" className="flex items-center gap-3 px-6 py-3">
            <LogoutCurve size="28" color="#FFFFFF" />
            <h2 className="text-base lg:text-[19px]">Logout</h2>
          </Link>
        </button>
      </div>
      {isExpand && (
        <div
          ref={sideBarBgRef}
          className="fixed inset-0 z-[48] h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden"
        />
      )}
    </nav>
  );
};

export default Sidebar;
