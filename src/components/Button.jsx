const Button = ({ type = "submit", className, ...props }) => (
  <button
    type={type}
    className={`${className} inline-flex items-center rounded-md border border-transparent bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ring-gray-300 transition duration-150 ease-in-out hover:bg-emerald-950 focus:border-gray-900 focus:outline-none focus:ring active:bg-gray-900 disabled:opacity-25`}
    {...props}
  />
);

export default Button;
