"use client";
import React, { useState } from "react";
import { Eye, EyeSlash, SearchNormal1 } from "iconsax-react";
import type { SetStateAction, Dispatch } from "react";

interface TextInputProps {
  textFieldValue: string | undefined;
  setTextFieldValue:
    | Dispatch<SetStateAction<string>>
    | ((value: string) => void);
  fullWidth?: boolean;
  placeholder: string;
  boxType: "text" | "password" | "search" | "email" | "number" | "textarea";
  description?: string;
  color:
    | "gray"
    | "purple"
    | "transparent"
    | "transparent-bold"
    | "transparent-border";
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  textFieldValue,
  setTextFieldValue,
  fullWidth,
  placeholder,
  boxType,
  color,
  required,
}) => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const colorEffect = {
    gray: {
      searchIcon: "#13A696",
      inputStyle: "rounded-lg bg-custom-purple-50",
      fontStyle:
        "text-black placeholder:text-custom-purple-200  text-sm lg:text-base",
      padding: "px-3.5 py-2 lg:px-5 lg:py-2.5",
    },
    purple: {
      searchIcon: "#FFFFFF",
      inputStyle: "rounded-full bg-custom-purple-300",
      fontStyle:
        "text-white placeholder:text-custom-purple-100 text-sm lg:text-base",
      padding: "px-3.5 py-2 lg:px-5 lg:py-2.5",
    },
    "transparent-border": {
      searchIcon: "#FFFFFF",
      inputStyle:
        "rounded-xl bg-transparent outline-none border-none caret-white",
      fontStyle:
        "text-white placeholder:text-custom-purple-100 text-sm lg:text-base",
      padding: "px-2 py-1 lg:px-3 lg:py-1.5 border border-white",
    },
    "transparent-bold": {
      searchIcon: "#FFFFFF",
      inputStyle: `bg-transparent outline-none border-none caret-white text-white font-poppins text-lg lg:text-2xl font-bold ${
        boxType === "textarea" ? "rounded-lg h-full" : "rounded-full"
      } bg-custom-purple-300`,
      fontStyle: "text-white placeholder:text-custom-purple-100",
      padding: "",
    },
    transparent: {
      searchIcon: "#FFFFFF",
      inputStyle:
        "rounded-full bg-transparent outline-none border-none caret-white text-white font-poppins text-sm lg:text-base",
      fontStyle: "text-white placeholder:text-custom-purple-100",
      padding: "",
    },
  };
  return (
    <div
      className={`${fullWidth ? "w-full" : "w-[261px]"} flex flex-col gap-y-1 ${
        colorEffect[color].inputStyle
      } bg-opacity-80 focus-within:border focus-within:border-custom-green-normal `}
    >
      <div
        className={`flex w-full flex-row items-center rounded-lg bg-transparent font-poppins ${colorEffect[color].padding}`}
      >
        {/* Search Icon for search type */}
        {boxType === "search" && (
          <SearchNormal1 size={24} color={colorEffect[color].searchIcon} />
        )}

        {/* Text Input */}
        {boxType === "textarea" ? (
          <textarea
            placeholder={placeholder}
            onChange={(e) => setTextFieldValue(e.target.value)}
            value={textFieldValue}
            name={boxType}
            id={boxType}
            className={`h-full w-full bg-transparent font-poppins text-sm leading-[25px] ${colorEffect[color].fontStyle} outline-none after:hidden lg:text-base `}
          />
        ) : (
          <input
            placeholder={placeholder}
            onChange={(e) => setTextFieldValue(e.target.value)}
            value={textFieldValue}
            name={boxType}
            id={boxType}
            required={required}
            type={
              boxType === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : boxType
            } // Conditionally set input type
            className={`h-full w-full bg-transparent font-poppins leading-[25px] ${
              colorEffect[color].fontStyle
            } outline-none after:hidden ${
              boxType === "search" && "ml-[11.5px]"
            } ${boxType === "password" && "mr-[5px]"}`}
          />
        )}
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
