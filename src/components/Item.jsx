import CheckItem from "../assets/icons/check.svg?react";
import LoadCircle from "../assets/icons/loader-circle.svg?react";
import Details from "../assets/icons/details.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import Button from "./Button";

const Item = ({
  title,
  status,
  handleDeleteClick,
  handleCheckboxClick,
  id,
}) => {
  const getStatusClasses = () => {
    if (status === "done") {
      return "bg-[#00acb428] text-[#002C2E]";
    } else if (status === "in_progress") {
      return "bg-[#ffab0428] text-[#002C2E]";
    } else {
      return "bg-[#35383415] text-[#002C2E]";
    }
  };

  const statusClasses = getStatusClasses();

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg px-4 py-3 transition ease-in-out ${statusClasses}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${statusClasses}`}
        >
          <input
            type="checkbox"
            checked={status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(id)}
          />
          {status === "done" && <CheckItem />}
          {status === "in_progress" && <LoadCircle className="animate-spin" />}
        </label>
        {title}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button variant="" onClick={() => handleDeleteClick(id)}>
          <TrashIcon className="text-[#9A9C9F] hover:opacity-75" />
        </button>
        <a href="#" className="transition-opacity hover:opacity-75">
          <Details className="text-[#9A9C9F]" />
        </a>
      </div>
    </div>
  );
};

export default Item;
