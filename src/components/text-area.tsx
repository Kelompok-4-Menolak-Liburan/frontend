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
            className={`${fullWidth ? "w-full" : "w-[261px]"} rounded-lg  flex flex-col gap-y-1 px-3 py-2 lg:px-6 lg:py-2.5 border border-white bg-opacity-80 focus-within:border focus-within:border-custom-green-normal `}
        >
            <div className={`flex w-full flex-row items-center bg-transparent font-poppins `}>
                {/* Input Box */}
                <textarea
                    placeholder={placeholder}
                    onChange={(e) => setTextFieldValue(e.target.value)}
                    value={textFieldValue}
                    className="h-full w-full min-h-[180px] custom-scrollbar pr-3 rounded-xl bg-transparent text-white placeholder:text-custom-purple-100 text-sm lg:text-base outline-none border-none caret-white font-poppins leading-[19px]"
                />
            </div>
        </div>
    );
};

export default TextArea;
