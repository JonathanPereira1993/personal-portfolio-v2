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
        isTextArea ? "" : " border-b pb-2 mb-3"
      } w-full flex items-center`}
    >
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea
          {...props}
          rows={8}
          id={id}
          className={`${
            isTextArea ? "bg-[#F3F3F3] p-6 rounded-xl" : "bg-transparent ml-2"
          } flex-1 placeholder:font-light`}
        />
      ) : (
        <input
          {...props}
          id={id}
          className={`${
            isTextArea ? "bg-[#F3F3F3] p-6 rounded-xl" : "bg-transparent ml-2"
          } flex-1 placeholder:font-light`}
        />
      )}

      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
