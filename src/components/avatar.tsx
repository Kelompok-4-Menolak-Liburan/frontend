import Image from "next/image";

interface AvatarProps {
  size: "small" | "normal" | "large";
  name?: string;
  text?: string
  imageUrl: string;
  fullWidth?: boolean
}
const Avatar: React.FC<AvatarProps> = ({ size, name, text, imageUrl, fullWidth }) => {
  // Define styles and dimensions based on avatar size
  const sizeEffectStyle = {
    small: {
      imageStyle: "w-[30px] h-[30px]",
      primaryTextStyle: "text-xs",
      childTextStyle: "text-[10px]",
    },
    normal: {
      imageStyle: "w-[40px] h-[40px]",
      primaryTextStyle: "text-sm lg:text-base",
      childTextStyle: "text-xs lg:text-sm",
    },
    large: {
      imageStyle: "w-[75px] aspect-square",
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
    <div className={`flex items-center ${fullWidth ? "w-full" : "w-fit"} justify-center gap-3 lg:gap-4`}>
      <Image
        src={imageUrl}
        alt={name + " Avatar"}
        width={sizeEffectImage[size]}
        height={sizeEffectImage[size]}
        className={`aspect-square rounded-full object-cover object-center ${sizeEffectStyle[size].imageStyle}`}
      />
      {/* Render name and text if provided */}
      {name && text && (
        <div className="flex justify-start items-start flex-col font-poppins text-white">
          <p className={`font-bold ${sizeEffectStyle[size].primaryTextStyle}`}>
            {name}
          </p>
          <p className={sizeEffectStyle[size].childTextStyle}>as a {text}</p>
        </div>
      )}
    </div>
  );
};
export default Avatar;
