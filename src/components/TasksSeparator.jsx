const TasksSeparator = ({ children }) => {
  return (
    <div className="space-y-3">
      <div className="gap-3 border-b border-solid border-[#F4F4F5] pb-[6.4px]">
        <p className="flex gap-2 text-sm font-semibold text-[#9A9C9F]">
          {children}
        </p>
      </div>
    </div>
  );
};

export default TasksSeparator;
