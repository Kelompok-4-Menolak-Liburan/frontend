import { Metadata } from "next";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
export const metadata: Metadata = {
  title: "Log in | SeTiket",
  description: "Log in",
  generator: "Next.js",
  applicationName: "SeTiket",
  colorScheme: "dark",
};
