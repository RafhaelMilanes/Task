import IntupLabel from "./InputLabel";

const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col text-left">
      <IntupLabel htmlfor={rest.id}>{label}</IntupLabel>
      <input
        {...rest}
        type="text"
        className="outline-brand-primary placeholder:text-brand-text-gray rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder:text-sm"
      />
    </div>
  );
};

export default Input;
