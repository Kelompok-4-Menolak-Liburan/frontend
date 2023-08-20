import { Metadata } from "next";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
export const metadata: Metadata = {
  title: "Registration | SeTiket",
  description: "Registration",
  generator: "Next.js",
  applicationName: "SeTiket",
  colorScheme: "dark",
};
