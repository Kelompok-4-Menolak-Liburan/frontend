interface CardDashboardProps {
    icon: JSX.Element;
    unit: string;
    amount: number;
    placeholder: string;

}
const CardDashboard: React.FC<CardDashboardProps> = ({ icon, placeholder, amount, unit }) => {
    return <div className="w-[150px] lg:w-[200px] items-center justify-center aspect-square bg-custom-purple-500 rounded-xl flex flex-col gap-4 px-5 py-6 font-poppins">
        {icon}
        <div className="flex flex-col w-full">
            <p className="text-custom-purple-75 text-sm lg:text-base">{placeholder}</p>
            <div className="flex gap-1">
                <p className="text-white text-sm lg:text-base"><span className="text-base lg:text-xl font-bold">{amount} </span>{" " + unit}</p>
            </div>
        </div>
    </div>
}
export default CardDashboard