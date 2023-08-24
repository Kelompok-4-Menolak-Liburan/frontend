import { fetcherGet, fetcherPost } from "@/libs/fetcher";
import { toast } from "react-hot-toast";
export const getRequest = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/event/?format=json`,
    );
    return response.json();
  } catch (error) {
    toast.error("Event data failed to fetch!");
    throw error; // Propagate the error further
  }
};
