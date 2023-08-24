import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>
    <Toaster />{children}</body>;
}
export const metadata: Metadata = {
  title: "Log in | SeTiket",
  description: "Log in",
  generator: "Next.js",
  applicationName: "SeTiket",
  colorScheme: "dark",
};
