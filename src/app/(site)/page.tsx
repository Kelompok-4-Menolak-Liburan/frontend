import { Metadata } from "next";
import { HomeClient } from "./home-client";
import { getRequest } from "./helper";

export default async function Home() {
  const events = await getRequest();
  return (
    <main className="flex min-h-full w-full flex-col items-center justify-between gap-2 overflow-hidden p-8 font-poppins text-white max-lg:pt-[75px] lg:px-12 lg:py-8 xl:px-16 xl:py-12">
      <HomeClient data={events} />
    </main>
  );
}
export const metadata: Metadata = {
  title: "SeTiket",
  description: "Homepage",
  generator: "Next.js",
  applicationName: "SeTiket",
  colorScheme: "dark",
};
