const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col text-left">
      <label
        className="mb-1 text-sm font-semibold text-[#35383E]"
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        {...rest}
        type="text"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
      />
    </div>
  );
};

export default Input;
