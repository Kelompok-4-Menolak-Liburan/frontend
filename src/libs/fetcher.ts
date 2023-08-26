export const fetcherGet = async (url: string) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`).then((res) =>
    res.json(),
  );

export const fetcherPost = async (url: string, data: any) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const fetcherPut = async (url: string, data: any) =>
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
