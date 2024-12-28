const Button = ({ children, variant = "primary", onClick, size }) => {
  const getVarienteClasses = () => {
    return variant === "primary"
      ? "bg-primary text-white hover:bg-[#006b71d1] duration-700 "
      : "bg-transparent text-dark-gray hover:text-[#636363] ";
  };

  const getSizeClasses = () => {
    if (size === "lg") {
      return "w-[142px] h-[36px] rounded-lg bg-brand-primary text-white flex text-center  items-center justify-center ";
    }
    return "bg-brand-light-gray text-black ounded-lg w-[142px] h-[36px]  items-center justify-center";
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
