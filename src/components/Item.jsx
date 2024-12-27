const Item = ({ title, status }) => {
  const getStatusClasses = () => {
    if (status === "done") {
      return "bg-[#00acb428] text-[#002C2E]";
    } else if (status === "in_progress") {
      return "bg-[#ffab0428] text-[#002C2E]";
    } else {
      return "bg-[#35383415] text-[#002C2E]";
    }
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 ${getStatusClasses()}`}
    >
      {title}
    </div>
  );
};

export default Item;
