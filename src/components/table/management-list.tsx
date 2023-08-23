import { Chart, Edit2, Eye } from "iconsax-react";
import Image from "next/image";

interface ManagementListProps {
    no: number;
    imageUrl: string;
    eventName: string;
    status: string
    sold: number;
    view: number;
}

const ManagementList: React.FC<ManagementListProps> = ({ no, imageUrl, eventName, status, sold, view }) => {
    return (
        <div className="w-full flex gap-16 py-3 px-6 bg-custom-purple-300 rounded-[10px] font-poppins text-white items-center text-base ">
            <h3 className="w-[30px]">{no}</h3>
            <Image alt={eventName + " Image"} src={imageUrl} width={120} height={60} className="object-center object-cover rounded-[10px] w-[120px] h-[60px]"></Image>
            <h3 className="flex-1">{eventName}</h3>
            <h3 className={`capitalize ${status.toLowerCase() === "active" ? "text-custom-green-normal" : "text-red-600"} font-semibold w-[150px]`}>{status}</h3>
            <h3 className="w-[100px]">{sold}</h3>
            <h3 className="w-[100px]">{view}</h3>
            <div className="w-[70px]">
                <button className="bg-custom-purple-200 rounded-lg w-[34px] aspect-square flex items-center justify-center">
                    <Edit2 size={30} color="#FFFFFF" />
                </button>
            </div>
            <div className="w-[70px]">
                <button className="bg-custom-purple-200 rounded-lg w-[34px] aspect-square flex items-center justify-center">
                    <Eye size={30} color="#FFFFFF" />
                </button>
            </div>
            <div className="w-[70px]">
                <button className="bg-custom-purple-200 rounded-lg w-[34px] aspect-square flex items-center justify-center mr-20">
                    <Chart size={30} color="#FFFFFF" />
                </button>
            </div>
        </div>
    )
}
export default ManagementList