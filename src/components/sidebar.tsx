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
    <nav className="fixed flex h-screen max-w-[303px] flex-col items-center justify-between rounded-r-[40px] bg-custom-purple-500 p-[65px] font-poppins text-white">
      {/* Sidebar header */}
      <h1 className="text-[33px] font-bold">SeTiket</h1>

      {/* Navigation items list */}
      <ul className="flex flex-col gap-3">
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className={`rounded-full transition duration-300 hover:bg-custom-purple-300 ${pathname.toLowerCase().includes(item.href.toLowerCase()) ||
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
                  size="32"
                  color="#FFFFFF"
                  variant={`${pathname.toLowerCase().includes(item.href.toLowerCase()) ||
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
      <button className="rounded-full transition duration-300 hover:bg-custom-purple-300">
        <Link href="/tes" className="flex items-center gap-3 px-6 py-3">
          <LogoutCurve size="32" color="#FFFFFF" />
          <h2 className="text-[19px]">Logout</h2>
        </Link>
      </button>
    </nav>
  );
};

export default Sidebar;
