import { ArrowDown2 } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Specify the type of dropdownRef

  // Function to handle an option click. Sets the selected option and closes the dropdown.
  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setOpen(false);
  };

  // Event listener to close the dropdown when clicking outside of it
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative cursor-pointer" ref={dropdownRef}>
      {/* Main div unaffected by open state and palceholder */}
      <div
        className="block w-full overflow-hidden rounded-full bg-custom-green-normal p-[1.5px]"
        onClick={() => setOpen(!open)}
      >
        <div className="flex w-full items-center justify-center gap-4 rounded-xl bg-custom-green-normal px-4 py-1 lg:px-5">
          <p className="text-center font-poppins text-[13px] font-semibold capitalize text-white lg:text-base">
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
        } absolute left-1/2 top-10 z-20 w-full -translate-x-1/2 rounded-lg border border-white bg-custom-green-normal transition-all duration-300 lg:top-14 lg:min-w-[250px]`}
      >
        {/* Mapping options */}
        {options.map((option) => (
          <p
            key={option}
            onClick={() => handleOptionClick(option)}
            className="cursor-pointer break-all px-5 py-2 text-center font-poppins text-[12px] font-semibold capitalize text-white transition duration-300 hover:bg-custom-green-dark hover:bg-opacity-30 lg:text-sm"
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
