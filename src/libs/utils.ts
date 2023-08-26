import { format, isSameDay, isSameMonth } from "date-fns";

export const getFormattedCurrency = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);

// Formatting the event date based on the conditions startdate and enddate
export const formattedEventDate = (
  eventStartDate: Date,
  eventEndDate?: Date,
) => {
  return eventEndDate && !isSameDay(eventStartDate, eventEndDate)
    ? format(
        eventStartDate,
        `${isSameMonth(eventStartDate, eventEndDate) ? "dd" : "dd MMMM"}'${
          "-" + format(eventEndDate, "dd MMMM")
        }' yyyy`,
      )
    : format(eventStartDate, "dd MMMM yyyy");
};
