import {
  Setting,
  Activity,
  FolderAdd,
  CalendarAdd,
  UserSquare,
} from "iconsax-react";

export const navigationItems = [
  { icon: UserSquare, label: "Admin", href: "/admin" },
  { icon: Activity, label: "Event Organizer", href: "/event-organizer" },
  { icon: FolderAdd, label: "Request Organizer", href: "/req-organizer" },
  { icon: CalendarAdd, label: "Create Events", href: "/create-event" },
  { icon: Setting, label: "Settings", href: "/settings" },
];
