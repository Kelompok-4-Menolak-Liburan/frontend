import React from "react";
import BulletList from "../bullet-list";
import PurchaseTicket from "../cards/purchase-ticket-card";
import Tabs from "./tabs";

const EventDetailsTabs = () => {
  const tabs = [
    {
      label: "Description",
      content: (
        <div className="flex flex-col gap-4">
          <BulletList
            items={[
              "Music and arts festival held outdoors in open green space",
              "Three days of live music, comedy, film, workshops, and marketplace across different areas of the venue",
              "A multisensory festival that collaborates with artists in various creative fields",
            ]}
          />
          <p className="text-base">
            Mari kurangi penggunaan plastik sekali pakai, drinking station
            tersedia di dalam venue untuk mengambil minum. Silahkan membawa
            tumbler milik Anda!Let&apos;s reduce single-use plastic. Refillable
            drinking stations are available inside the venue. Merokok hanya
            diperbolehkan di area yang telah disediakan.Smoking is only allowed
            in the areas provided.
          </p>
        </div>
      ),
    },
    {
      label: "Terms and Conditions",
      content: <p>These are the terms and conditions.</p>,
    },
    {
      label: "Purchase",
      content: (
        <div className="flex w-full flex-col gap-5">
          <PurchaseTicket
            price={150000}
            ticketName="PRESALE 1 : 3 Day Pass Reguler Entry"
            terms={[
              "Harga belum termasuk biaya pajak",
              "Tiket berlaku untuk 3 hari (Jum'at - Minggu, 24 - 26 November 2023)",
            ]}
          />
          <PurchaseTicket
            price={150000}
            ticketName="PRESALE 1 : 3 Day Pass Reguler Entry"
            terms={[
              "Harga belum termasuk biaya pajak",
              "Tiket berlaku untuk 3 hari (Jum'at - Minggu, 24 - 26 November 2023)",
            ]}
          />
          <PurchaseTicket
            price={150000}
            ticketName="PRESALE 1 : 3 Day Pass Reguler Entry"
            terms={[
              "Harga belum termasuk biaya pajak",
              "Tiket berlaku untuk 3 hari (Jum'at - Minggu, 24 - 26 November 2023)",
            ]}
          />
        </div>
      ),
    },
  ];
  return <Tabs tabs={tabs} />;
};
export default EventDetailsTabs;
