const Button = ({ children, variant = "primary", onClick, size }) => {
  const getVarienteClasses = () => {
    return variant === "primary"
      ? "bg-[#00ADB5] text-white hover:bg-[#006b71d1] duration-700 "
      : "bg-transparent text-[#818181] hover:text-[#636363] ";
  };

  const getSizeClasses = () => {
    if (size === "lg") {
      return "w-[142px] h-[36px] rounded-lg bg-[#00ADB5] text-white flex text-center  items-center justify-center ";
    }
    return "bg-[#EEEEEE] text-black ounded-lg w-[142px] h-[36px]  items-center justify-center";
  };

  return (
    <button
      className={`flex items-center gap-2 rounded-md px-3 py-1 text-xs ${getVarienteClasses()} ${getSizeClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
