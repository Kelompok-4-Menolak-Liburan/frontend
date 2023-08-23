import Header from "@/components/header"
import CreateEventClient from "./create-event-client"

const CreateEventPage = () => {
    return <main className="flex min-h-full w-full flex-col items-center justify-between gap-2 overflow-hidden p-6 font-poppins text-white max-lg:pt-[75px] lg:px-12 lg:py-8 xl:px-16 xl:py-12" >
        {/* <Header /> */}
        <CreateEventClient />
    </main >
}
export default CreateEventPage