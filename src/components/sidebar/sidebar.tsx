"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "./helpers";
import { LogoutCurve } from "iconsax-react";

const Sidebar = () => {
  // Using the usePathname hook to get the current pathname
  const pathname = usePathname();

  return (
    <nav className="fixed flex h-screen max-w-[250px] flex-col items-center justify-between rounded-r-[30px] bg-custom-purple-500 py-[55px] px-[40px] font-poppins text-white">
      {/* Sidebar header */}
      <h1 className="text-2xl font-bold">SeTiket</h1>

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
                  size="24"
                  color="#FFFFFF"
                  variant={`${
                    pathname.toLowerCase().includes(item.href.toLowerCase()) ||
                    pathname.toLowerCase() === item.href.toLowerCase()
                      ? "Bold"
                      : "Outline"
                  }`}
                />
              }
              <h2 className="text-base">{item.label}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* Logout button */}
      <button className="rounded-full transition duration-300 hover:bg-custom-purple-300">
        <Link href="/tes" className="flex items-center gap-3 px-6 py-3">
          <LogoutCurve size="24" color="#FFFFFF" />
          <h2 className="text-base">Logout</h2>
        </Link>
      </button>
    </nav>
  );
};

export default Sidebar;
