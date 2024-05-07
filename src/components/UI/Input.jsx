const Input = ({
  label,
  id,
  error,
  className,
  isTextArea = false,
  ...props
}) => {
  return (
    <div
      className={`${className} ${
        isTextArea ? "" : " border-b dark:border-[#383737] pb-2 mb-3"
      } w-full flex items-center`}
    >
      <label htmlFor={id} className="dark:text-white">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          {...props}
          rows={8}
          id={id}
          className={`${
            isTextArea
              ? "bg-[#F3F3F3] dark:bg-[#0D0D0D] p-6 rounded-xl"
              : "bg-transparent ml-2"
          } flex-1 placeholder:font-light font-light dark:text-white`}
        />
      ) : (
        <input
          {...props}
          id={id}
          className={`${
            isTextArea ? "bg-[#F3F3F3] p-6 rounded-xl" : "bg-transparent ml-2"
          } flex-1 placeholder:font-light font-light dark:text-white`}
        />
      )}

      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
