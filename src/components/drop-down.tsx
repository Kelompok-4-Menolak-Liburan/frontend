import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';

interface DropdownProps {
    options: string[];
    placeholder?: string;
    selectedOption: string
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, selectedOption, setSelectedOption }) => {
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
                className="block w-full p-[1.5px] rounded-full overflow-hidden bg-custom-green-normal"
                onClick={() => setOpen(!open)}
            >
                <div className='flex justify-center items-center gap-4 w-full py-1 px-4 lg:px-5 rounded-xl bg-custom-green-normal'>
                    <p className="text-white text-sm lg:text-base font-poppins capitalize font-semibold text-center">{selectedOption || placeholder}</p>
                    <ArrowDown2 size={24} color='#FFFFFF' />
                </div>
            </div>
            {/* Dropdown open */}
            <div className={`${open ? "opacity-100 translate-y-0" : "-translate-y-[60px] pointer-events-none opacity-0"} transition-all duration-300 absolute z-20 top-16 lg:top-14 left-1/2 -translate-x-1/2 min-w-[250px] bg-custom-green-normal border border-white rounded-lg`} >
                {/* Mapping options */}
                {options.map((option) => (
                    <p
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="cursor-pointer break-all text-sm text-center font-poppins capitalize font-semibold text-white py-2 px-5 hover:bg-custom-green-dark hover:bg-opacity-30 transition duration-300"
                    >
                        {option}
                    </p>
                ))}
            </div>

        </div>
    );
};

export default Dropdown;
