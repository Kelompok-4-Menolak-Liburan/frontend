import { EventDetailsTabs } from "@/components/event-details-tabs";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-between text-white p-24 font-poppins">
      <div className="w-[1000px]">
        <EventDetailsTabs/>
      
      </div>
    </main>
  );
}
