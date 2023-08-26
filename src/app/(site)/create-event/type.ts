export interface TicketState {
  [key: string]: {
    value: string;
    placeholder: string;
    title: string;
  };
}

export const freeTicketInitialState: TicketState = {
  ticketName: {
    value: "",
    placeholder: "Enter your Ticket Name",
    title: "Ticket Name",
  },
  ticketAmount: {
    value: "",
    placeholder: "Enter the Ticket Amount",
    title: "Ticket Amount",
  },
  startPrice: {
    value: "",
    placeholder: "Enter the Starting Price",
    title: "Starting Price",
  },
  dateSale: {
    value: "",
    placeholder: "Select the Start Date of Sale",
    title: "Start Date of Sale",
  },

  ticketDescription: {
    value: "",
    placeholder: "Enter the Ticket Description",
    title: "Ticket Description",
  },
  price: { value: "", placeholder: "Enter the Price", title: "Price" },
};

export const volunterTicketInitialState: TicketState = {
  ticketName: {
    value: "",
    placeholder: "Enter your Ticket Name",
    title: "Ticket Name",
  },
  ticketAmount: {
    value: "",
    placeholder: "Enter the Ticket Amount",
    title: "Ticket Amount",
  },
  dateSale: {
    value: "",
    placeholder: "Select the Start Date of Sale",
    title: "Start Date of Sale",
  },

  ticketDescription: {
    value: "",
    placeholder: "Enter the Ticket Description",
    title: "Ticket Description",
  },
  price: { value: "", placeholder: "Enter the Price", title: "Price" },
};

export const paidTicketInitialState: TicketState = {
  ticketName: {
    value: "",
    placeholder: "Enter your Ticket Name",
    title: "Ticket Name",
  },
  ticketAmount: {
    value: "",
    placeholder: "Enter the Ticket Amount",
    title: "Ticket Amount",
  },

  dateSale: {
    value: "",
    placeholder: "Select the Start Date of Sale",
    title: "Start Date of Sale",
  },

  ticketDescription: {
    value: "",
    placeholder: "Enter the Ticket Description",
    title: "Ticket Description",
  },
  price: { value: "", placeholder: "Enter the Price", title: "Price" },
};
