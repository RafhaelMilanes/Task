import { useState } from "react";

const SidebarButton = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
  };

  const getVarientClasses = () => {
    return isSelected === true
      ? "bg-[#E6F7F8] text-[#00ADB5]"
      : "text-[#35383E]";
  };

  return (
    <a
      onClick={handleSelected}
      href="#"
      className={`rounded-lg px-6 py-3 ${getVarientClasses()}`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
