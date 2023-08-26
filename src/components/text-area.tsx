import { Dispatch, SetStateAction } from "react";

interface TextArea {
  textFieldValue: string;
  setTextFieldValue:
    | Dispatch<SetStateAction<string>>
    | ((value: string) => void);
  fullWidth: boolean;
  placeholder: string;
}

const TextArea = ({
  textFieldValue,
  setTextFieldValue,
  fullWidth,
  placeholder,
}: TextArea) => {
  return (
    <div
      className={`${
        fullWidth ? "w-full" : "w-[261px]"
      } flex  flex-col gap-y-1 rounded-lg border border-white bg-opacity-80 px-3 py-2 focus-within:border focus-within:border-custom-green-normal lg:px-6 lg:py-2.5 `}
    >
      <div
        className={`flex w-full flex-row items-center bg-transparent font-poppins `}
      >
        {/* Input Box */}
        <textarea
          placeholder={placeholder}
          onChange={(e) => setTextFieldValue(e.target.value)}
          value={textFieldValue}
          className="custom-scrollbar h-full min-h-[180px] w-full rounded-xl border-none bg-transparent pr-3 font-poppins text-sm leading-[19px] text-white caret-white outline-none placeholder:text-custom-purple-100 lg:text-base"
        />
      </div>
    </div>
  );
};

export default TextArea;
