import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  selectedOption,
  setSelectedOption,
}) => {
  // State to keep track of whether the dropdown is open or closed.
  const [open, setOpen] = useState(false);

  // Function to handle an option click. Sets the selected option and closes the dropdown.
  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <div className="relative cursor-pointer">
      {/* Main div unaffected by open state and palceholder */}
      <div
        className="block w-full overflow-hidden rounded-full bg-custom-green-normal p-[1.5px]"
        onClick={() => setOpen(!open)}
      >
        <div className="flex w-full items-center justify-center gap-4 rounded-xl bg-custom-green-normal px-4 py-1 lg:px-5">
          <p className="text-center font-poppins text-sm font-semibold capitalize text-white lg:text-base">
            {selectedOption || placeholder}
          </p>
          <ArrowDown2 size={24} color="#FFFFFF" />
        </div>
      </div>
      {/* Dropdown open */}
      <div
        className={`${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[60px] opacity-0"
        } absolute left-1/2 top-16 z-20 min-w-[250px] -translate-x-1/2 rounded-lg border border-white bg-custom-green-normal transition-all duration-300 lg:top-14`}
      >
        {/* Mapping options */}
        {options.map((option) => (
          <p
            key={option}
            onClick={() => handleOptionClick(option)}
            className="cursor-pointer break-all px-5 py-2 text-center font-poppins text-sm font-semibold capitalize text-white transition duration-300 hover:bg-custom-green-dark hover:bg-opacity-30"
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
