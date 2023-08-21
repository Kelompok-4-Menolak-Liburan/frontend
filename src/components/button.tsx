const Button = ({
  size,
  onClick,
  color,
  children,
  disabled = false,
  fullWidth,
  type = "button",
}: {
  size: "extra-small" | "small" | "normal" | "large" | "extra-large";
  onClick?: () => void;
  color:
  | "purple-primary"
  | "purple-secondary"
  | "purple-tertiary"
  | "green-primary"
  | "green-secondary";
  children: string | JSX.Element;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "submit" | "button" | undefined;
}) => {
  // CSS classes based on button size.
  const sizeEffect = {
    "extra-small": "py-1 px-4",
    small: "py-2 px-4",
    normal: "py-3 px-6",
    large: "py-3 px-9",
    "extra-large": "h-[63px] w-[500px]",
  };

  // CSS classes based on button color.
  const colorStyle = {
    "purple-primary":
      "bg-custom-purple-300 text-white disabled:bg-custom-purple-100 disabled:text-custom-purple-75",
    "purple-secondary":
      "bg-transparent text-white disabled:text-custom-purple-100 border-white border disabled:border-custom-purple-100",
    "purple-tertiary":
      "bg-custom-purple-100 text-custom-purple-300 disabled:bg-custom-purple-75 disabled:text-custom-purple-100",
    "green-primary":
      "bg-custom-green-normal text-white disabled:bg-custom-green-light-active disabled:text-custom-green-dark hover:bg-custom-green-normal-hover",
    "green-secondary":
      "bg-transparent text-custom-green-normal disabled:text-custom-dark border-custom-green-normal border disabled:border-custom-green-dark",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={
        typeof children === "string" ? `${children} Button` : "Button"
      }
      className={`rounded-full font-poppins text-base font-bold transition duration-300 hover:opacity-80 disabled:cursor-not-allowed ${fullWidth ? "w-full" : "w-fit"
        } ${sizeEffect[size]} ${colorStyle[color]} `}
    >
      {children}
    </button>
  );
};

export default Button;
