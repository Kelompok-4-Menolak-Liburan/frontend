"use client";
import React, { useState } from "react";
import { Eye, EyeSlash, SearchNormal1 } from "iconsax-react";

interface TextInputProps {
  textFieldValue: string;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
  fullWidth: boolean;
  placeholder: string;
  boxType: "text" | "password" | "search" | "email";
  description?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  textFieldValue,
  setTextFieldValue,
  fullWidth,
  placeholder,
  boxType,
}) => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className={`${
        fullWidth ? "w-full" : "w-[261px]"
      } flex flex-col gap-y-1 rounded-lg bg-custom-purple-50 bg-opacity-80`}
    >
      <div className="flex w-full flex-row items-center rounded-lg bg-transparent px-3.5 py-2.5 font-poppins focus-within:border focus-within:border-custom-green-normal lg:px-5 lg:py-3 lg:hover:shadow-[0px_0px_2px_1px_#FFFFFF]">
        {/* Search Icon for search type */}
        {boxType === "search" && <SearchNormal1 size={24} color="#13A696" />}

        {/* Text Input */}
        <input
          placeholder={placeholder}
          onChange={(e) => setTextFieldValue(e.target.value)}
          value={textFieldValue}
          name={boxType}
          id={boxType}
          type={
            boxType === "password"
              ? showPassword
                ? "text"
                : "password"
              : boxType
          } // Conditionally set input type
          className={`h-full w-full bg-transparent font-poppins text-sm leading-[25px] text-black outline-none placeholder:text-custom-purple-200 after:hidden lg:text-base ${
            boxType === "search" && "ml-[11.5px]"
          } ${boxType === "password" && "mr-[5px]"}`}
        />
        {/* Eyes Icon Button for Password Type */}
        {boxType === "password" && (
          <button onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeSlash color="#222747" size={24} />
            ) : (
              <Eye color="#222747" size={24} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// Export the TextInput component as the default export
export default TextInput;
