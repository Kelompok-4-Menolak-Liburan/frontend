// {
//   "title": "2023 LE SSERAFIM TOUR ‘FLAME RISES’ IN JAKARTA",
//   "image_url": "https://res.cloudinary.com/setiket/image/upload/pizdgeujinevicmme26c",
//   "description": "mau nonton konser asik? cuma disini tempatnya",
//   "start_date": "2023-08-24",
//   "end_date": "2023-08-25",
//   "place_name": "KEMAYORAN",
//   "city": "JAKARTA PUSAT",
//   "full_address": "JAKARTA",
//   "location": "KEMAYORAN",
//   "category": "konser",
//   "organizer": "admin",
//   "ticket_type": []
// }

export interface EventDetail {
  title: string;
  image_url: string;
  description: string;
  start_date: string;
  end_date: string;
  place_name: string;
  city: string;
  full_address: string;
  location: string;
  category: string;
  organizer: string;
  ticket_type: [];
}
