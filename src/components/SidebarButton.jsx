import { useState } from "react";

const SidebarButton = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
  };

  const getVarientClasses = () => {
    return isSelected === true
      ? "bg-brand-primary bg-opacity-15 text-brand-primary"
      : "text-dark-blue";
  };

  return (
    <a
      onClick={handleSelected}
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVarientClasses()}`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
