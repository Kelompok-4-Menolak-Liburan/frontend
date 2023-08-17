"use client";
import { Star1, Ticket, Repeat, Setting, LogoutCurve } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="font-poppins text-white max-w-[303px] h-full sticky rounded-r-[40px] flex flex-col items-center justify-between p-[65px] bg-custom-purple-500">
      {/* Sidebar header */}
      <h1 className="font-bold text-[33px]">SeTiket</h1>

      {/* Navigation items list */}
      <ul className="flex flex-col gap-3">
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className={`hover:bg-custom-purple-300 duration-300 transition rounded-full ${
              pathname.toLowerCase().includes(item.href.toLowerCase()) ||
              pathname.toLowerCase() === item.href.toLowerCase()
                ? "bg-custom-purple-300"
                : "bg-transparent"
            }`}
          >
            {/* Link to the respective navigation item */}
            <Link
              href={item.href}
              className="flex py-3 px-6 gap-3 items-center"
            >
              {/* Displaying the icon with dynamic variant based on the active status */}
              {
                <item.icon
                  size="32"
                  color="#FFFFFF"
                  variant={`${
                    pathname.toLowerCase().includes(item.href.toLowerCase()) ||
                    pathname.toLowerCase() === item.href.toLowerCase()
                      ? "Bold"
                      : "Outline"
                  }`}
                />
              }
              <h2 className="text-[19px]">{item.label}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* Logout button */}
      <button className="hover:bg-custom-purple-300 duration-300 transition rounded-full">
        <Link href="/tes" className="flex py-3 px-6 gap-3 items-center">
          <LogoutCurve size="32" color="#FFFFFF" />
          <h2 className="text-[19px]">Logout</h2>
        </Link>
      </button>
    </nav>
  );
};

export default Sidebar;
