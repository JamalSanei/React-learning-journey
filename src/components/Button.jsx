const Button = ({ children, ...props }) => (
  <div>
    <button
      className=" bg-slate-500 rounded border p-2 border-blue-500 text-white"
      {...props}
    >
      {children} {/*  pass nested elements  */}
    </button>
  </div>
);

export default Button;
