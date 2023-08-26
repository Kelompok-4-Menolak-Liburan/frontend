export interface EventData {
  id: string;
  title: string;
  image_url: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  city: string;
  price: number;
  category?: string;
  organizer: string;
  url_detail?: string;
}
