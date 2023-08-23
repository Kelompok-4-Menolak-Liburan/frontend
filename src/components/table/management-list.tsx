import { Chart, Edit2, Eye } from "iconsax-react";
import Image from "next/image";

interface ManagementListProps {
    no: number;
    imageUrl: string;
    eventName: string;
    status: "active" | "not active"
    sold: number;
    view: number;
}

const ManagementList: React.FC<ManagementListProps> = ({ no, imageUrl, eventName, status, sold, view }) => {
    return (
        <tr
            key={no}
            className="w-full bg-custom-purple-300 rounded-[20px] font-poppins text-white text-sm lg:text-base overflow-x-scroll"
        >
            {/* Numbering */}
            <td className="py-3">{no}</td>
            {/* Image */}
            <td className="w-[120px] py-3">
                <Image
                    alt={eventName + " Image"}
                    src={imageUrl}
                    width={120}
                    height={60}
                    className="object-center object-cover rounded-[10px] w-[120px] h-[60px]"
                />
            </td>
            {/* Event Name */}
            {/* Event Name */}
            <td className="py-3 min-w-[140px] px-2">{eventName}</td>
            {/* Status */}
            <td
                className={`capitalize ${status.toLowerCase() === "active"
                    ? "text-custom-green-normal"
                    : "text-red-600"
                    } font-semibold`}
            >
                {status}
            </td>
            {/* Sold */}
            <td className="py-3">{sold}</td>
            {/* View */}
            <td className="py-3">{view}</td>
            {/* BUtton Edit */}
            <td className="py-3">
                <button className="bg-custom-purple-200 rounded-lg w-[30px] m-auto flex items-center justify-center lg:w-[34px] aspect-square">
                    <Edit2 size={30} color="#FFFFFF" />
                </button>
            </td>
            {/* BUtton See */}
            <td className="py-3">
                <button className="bg-custom-purple-200 rounded-lg w-[30px] m-auto flex items-center justify-center lg:w-[34px] aspect-square">
                    <Eye size={26} color="#FFFFFF" />
                </button>
            </td>
            {/* BUtton Chart */}
            <td className="py-3">
                <button className="bg-custom-purple-200 rounded-lg w-[30px] m-auto flex items-center justify-center lg:w-[34px] aspect-square">
                    <Chart size={26} color="#FFFFFF" />
                </button>
            </td>
        </tr>
    )
}
export default ManagementList