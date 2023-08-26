import { toast } from "react-hot-toast";

export const sendRequest = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const data = {
    username,
    password,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login/?format=json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.status === 401) {
      const errorData = await response.json();
      const errorMessage = errorData.detail || "Invalid login data"; // Default message if detail is missing
      toast.error(errorMessage);
    } else if (response.ok) {
      toast.success("Successfully logged in!");
    } else {
      toast.error("Something went wrong!");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong!");
  }
};
