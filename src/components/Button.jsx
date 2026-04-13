import { useState } from "react";

const Button = ({ children, ...props }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button
        className=" bg-slate-500 rounded border p-2 border-blue-500 text-white"
        {...props}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
      >
        {children} {/*  pass nested elements  */}
      </button>
    </div>
  );
};

export default Button;
