const TasksSeparator = ({ children }) => {
  return (
    <div className="space-y-3">
      <div className="border-brand-border gap-3 border-b border-solid pb-[6.4px]">
        <p className="text-brand-text-gray flex gap-2 text-sm font-semibold">
          {children}
        </p>
      </div>
    </div>
  );
};

export default TasksSeparator;
