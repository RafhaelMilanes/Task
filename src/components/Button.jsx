const Button = ({ children, variant = "primary" }) => {
  const getVarienteClasses = () => {
    return variant === "primary"
      ? "bg-[#00ADB5] text-white hover:bg-[#006b71d1] duration-700 "
      : "bg-transparent text-[#818181] hover:text-[#636363] ";
  };

  return (
    <button
      className={`flex items-center gap-2 rounded-md px-3 py-1 text-xs ${getVarienteClasses()}`}
    >
      {children}
    </button>
  );
};

export default Button;
