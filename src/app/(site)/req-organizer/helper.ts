import { fetcherGet, fetcherPost } from "@/libs/fetcher";
import { toast } from "react-hot-toast";

export const sendRequest = async ({
  name,
  location,
  description,
}: {
  name: string;
  location: string;
  description: string;
}) => {
  const data = {
    name: name,
    location: location,
    description: description,
  };

  try {
    const response = await fetcherPost(
      "/api/event-organizer-proposal/create/?format=json",
      data,
    );

    toast.success("Proposal successfully sent!");
  } catch (error) {
    toast.error("Proposal failed to send!");
  }
};

export const getRequest = async ({ id }: { id: string }) => {
  try {
    const response = await fetcherGet(
      `/api/event-organizer-proposal/${id}/?format=json`,
    );

    return response.json();
  } catch (error) {
    // toast.error("Proposal failed to fetch!");
  }
};
