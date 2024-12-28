const IntupLabel = (props) => {
  return (
    <label
      className="text-brand-dark-blue mb-1 text-sm font-semibold"
      {...props}
    >
      {props.children}
    </label>
  );
};

export default IntupLabel;
