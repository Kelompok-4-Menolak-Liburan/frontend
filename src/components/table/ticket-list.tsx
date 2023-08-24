import { Chart, Edit2, Eye } from "iconsax-react";
import Image from "next/image";

interface TicketListProps {
    no: number;
    imageUrl: string;
    eventName: string;
    status: "active" | "not active";
    sold: number;
    view: number;
}

const TicketList: React.FC<TicketListProps> = ({
    no,
    imageUrl,
    eventName,
    status,
    sold,
    view,
}) => {
    return (
        <tr
            key={no}
            className="w-full overflow-x-scroll rounded-[20px] bg-custom-purple-300 font-poppins text-sm text-white lg:text-base"
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
                    className="h-[60px] w-[120px] rounded-[10px] object-cover object-center"
                />
            </td>
            {/* Event Name */}
            {/* Event Name */}
            <td className="min-w-[140px] px-2 py-3">{eventName}</td>
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

        </tr>
    );
};
export default TicketList;
