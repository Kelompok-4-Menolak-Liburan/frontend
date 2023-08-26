export interface EventDetail {
  title: string;
  image_url: string;
  description: string;
  start_date: string;
  end_date: string;
  place_name: string;
  city: string;
  start_time: string;
  end_time: string;
  full_address: string;
  location: string;
  category: string;
  organizer: string;
  ticket_type: {
    id: string;
    title: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    ticket_quantity: number;
    ticket_type: string;
    description: string;
    price: number;
  }[];
}
