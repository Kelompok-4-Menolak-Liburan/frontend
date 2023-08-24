import CardDashboard from "@/components/cards/dashboard-event-org-card";
import BarChart from "../../../components/bar-chart"
import { Eye, Ticket, TicketStar } from "iconsax-react";
import TicketTable from "@/components/table/ticket-table";
interface Event {
    imageUrl: string;
    eventName: string;
    status: "active" | "not active";
    sold: number;
    view: number;
}
const Page = () => {
    const dummyData = [
        {
            icon: <button className="rounded-xl bg-custom-purple-200 p-2 w-fit"><Eye color="#FFFFFF" size={30} /></button>,
            placeholder: "Placeholder 1",
            amount: 123,
            unit: "Units",
        },
        {
            icon: <button className="rounded-xl bg-custom-purple-200 p-2 w-fit"><Ticket color="#FFFFFF" size={30} /></button>,
            placeholder: "Placeholder 2",
            amount: 456,
            unit: "Units",
        },
        {
            icon: <button className="rounded-xl bg-custom-purple-200 p-2 w-fit"><TicketStar color="#FFFFFF" size={30} /></button>,
            placeholder: "Placeholder 3",
            amount: 789,
            unit: "Units",
        },
        // Add more dummy data objects as needed
    ];

    const generateDummyEvents = (count: number) => {
        const dummyEvents: Event[] = [];
        for (let i = 0; i < count; i++) {
            dummyEvents.push({
                imageUrl: `/logo.png`,
                eventName: `Event ${i + 1}`,
                status: i % 2 === 0 ? "active" : "not active",
                sold: Math.floor(Math.random() * 1000),
                view: Math.floor(Math.random() * 5000),
            });
        }
        return dummyEvents;
    };

    return (

        <main className="flex min-h-full w-full flex-col gap-10 lg:gap-14 overflow-hidden p-8 font-poppins text-white max-lg:pt-[75px] lg:px-12 lg:py-8 xl:px-16 xl:py-12">
            <h1 className="text-xl font-bold lg:text-3xl">Dashboard</h1>
            <div className="flex flex-col w-full gap-10 ">

                <div className="flex flex-wrap w-full gap-5 lg:gap-14 max-lg:items-center max-lg:justify-center">
                    {dummyData.map((data, index) => (
                        <CardDashboard
                            key={index}
                            icon={data.icon}
                            placeholder={data.placeholder}
                            amount={data.amount}
                            unit={data.unit}
                        />
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row flex-1 gap-6">
                    <TicketTable events={generateDummyEvents(50)} searchStatus={false} />
                    <div className="w-full lg:w-[500px]">
                        <BarChart />
                    </div>
                </div>
            </div>
        </main>
    )

}
export default Page