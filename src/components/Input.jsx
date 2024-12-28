import IntupLabel from "./InputLabel";

const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col text-left">
      <IntupLabel htmlfor={rest.id}>{label}</IntupLabel>
      <input
        {...rest}
        type="text"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
      />
    </div>
  );
};

export default Input;
