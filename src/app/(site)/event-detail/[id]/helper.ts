import { fetcherGet } from "@/libs/fetcher";
import { toast } from "react-hot-toast";

export const getEventDetail = async ({ id }: { id: string }) => {
  try {
    const response = await fetcherGet(`api/event/${id}/?format=json`);

    return response.json();
  } catch (error) {
    // toast.error("Event not found!");
  }
};
