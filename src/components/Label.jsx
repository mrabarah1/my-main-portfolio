const Label = ({ className, children, ...props }) => (
  <label
    className={`${className} absolute left-0 -top-4 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white`}
    {...props}
  >
    {children}
  </label>
);

export default Label;
