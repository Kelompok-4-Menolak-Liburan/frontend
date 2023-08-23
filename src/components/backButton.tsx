import { ArrowSquareLeft } from "iconsax-react";

const BackButton = ({ text, label }: { text: boolean; label?: string }) => {
  return (
    <button>
      <ArrowSquareLeft variant="Linear" size={28} color="#ffffff" />
      {label}
    </button>
  );
};

export default BackButton;
