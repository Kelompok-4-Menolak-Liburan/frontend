import Image from "next/image";

interface AvatarProps {
  size: "small" | "normal" | "large";
  name?: string;
  role?: "Customer" | "Event Organizer" | "Administrator";
  imageUrl: string;
}
const Avatar: React.FC<AvatarProps> = ({ size, name, role, imageUrl }) => {
  // Define styles and dimensions based on avatar size
  const sizeEffectStyle = {
    small: {
      imageStyle: "w-[30px] h-[30px]",
      primaryTextStyle: "text-xs",
      childTextStyle: "text-[10px]",
    },
    normal: {
      imageStyle: "w-[40px] h-[40px]",
      primaryTextStyle: "text-base",
      childTextStyle: "text-sm",
    },
    large: {
      imageStyle: "w-[75px] h-[75px]",
      primaryTextStyle: "text-[13px]",
      childTextStyle: "text-[11px]",
    },
  };

  // Define image dimensions based on avatar size
  const sizeEffectImage = {
    small: 30,
    normal: 50,
    large: 75,
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Image
        src={imageUrl}
        alt={name + " Avatar"}
        width={sizeEffectImage[size]}
        height={sizeEffectImage[size]}
        className={`aspect-square rounded-full object-cover object-center ${sizeEffectStyle[size].imageStyle}`}
      />
      {/* Render name and role if provided */}
      {name && role && (
        <div className="flex flex-col justify-center font-poppins text-white">
          <p className={`font-bold ${sizeEffectStyle[size].primaryTextStyle}`}>
            {name}
          </p>
          <p className={sizeEffectStyle[size].childTextStyle}>as a {role}</p>
        </div>
      )}
    </div>
  );
};
export default Avatar;
