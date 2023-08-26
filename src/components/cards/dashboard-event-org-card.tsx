interface CardDashboardProps {
  icon: JSX.Element;
  unit: string;
  amount: number;
  placeholder: string;
}
const CardDashboard: React.FC<CardDashboardProps> = ({
  icon,
  placeholder,
  amount,
  unit,
}) => {
  return (
    <div className="flex aspect-square w-[150px] flex-col items-center justify-center gap-4 rounded-xl bg-custom-purple-500 px-5 py-6 font-poppins lg:w-[200px]">
      {icon}
      <div className="flex w-full flex-col">
        <p className="text-sm text-custom-purple-75 lg:text-base">
          {placeholder}
        </p>
        <div className="flex gap-1">
          <p className="text-sm text-white lg:text-base">
            <span className="text-base font-bold lg:text-xl">{amount} </span>
            {" " + unit}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardDashboard;
