const Input = ({ disabled = false, className, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} peer h-10 block mt-1 w-full border-b-2 cursor-pointer border-0 text-white bg-transparent  placeholder-transparent  focus:outline-none  focus:border-gray-900 shadow-sm   focus:ring-0 ring-0`}
    {...props}
  />
);

export default Input;
