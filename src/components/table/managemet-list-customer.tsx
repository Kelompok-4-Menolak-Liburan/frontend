import { Chart, Edit2, Eye } from "iconsax-react";
import Image from "next/image";
import Avatar from "../avatar";
import { format } from "date-fns";
import { getFormattedCurrency } from "@/libs/utils";

interface ManagementListCustomerProps {
  no: number;
  imageUrl: string;
  email: string;
  name: string;
  ticketName: string;
  buyDate: Date;
  price?: number;
  isFree?: boolean;
}

const ManagementListCustomer: React.FC<ManagementListCustomerProps> = ({
  no,
  imageUrl,
  name,
  email,
  ticketName,
  buyDate,
  price,
  isFree,
}) => {
  return (
    <tr
      key={no}
      className="w-full rounded-[20px] bg-custom-purple-300 font-poppins text-sm text-white lg:text-base"
    >
      {/* Numbering */}
      <td className="py-3">{no}</td>
      {/* Image */}
      <td className="min-w-[250px] py-3">
        <Avatar size="normal" imageUrl={imageUrl} text={email} name={name} />
      </td>
      {/* Buy Date*/}
      <td className="py-3">{format(buyDate, "MMM HH, yyyy")}</td>
      {/* Ticket Name */}
      <td className="font-semibold capitalize text-custom-green-normal">
        {ticketName}
      </td>
      {/* Price */}

      <td className="py-3">
        {isFree ? "Free" : price !== undefined && getFormattedCurrency(price)}
      </td>
      {/* BUtton Edit */}
      <td className="py-3">
        <button className="m-auto flex aspect-square w-[30px] items-center justify-center rounded-lg bg-custom-purple-200 lg:w-[34px]">
          <Edit2 size={30} color="#FFFFFF" />
        </button>
      </td>
    </tr>
  );
};
export default ManagementListCustomer;
