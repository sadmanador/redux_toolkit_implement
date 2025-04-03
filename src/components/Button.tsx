import React from "react";

const Button = ({children, type, handler}) => {
    const style =
      type === "danger"
        ? "bg-red-500 px-3 py-2 hover:bg-red-700 text-white rounded shadow"
        : "bg-blue-500 px-3 py-2 hover:bg-blue-700 text-white rounded shadow";
  return <button className={style} onClick={handler}>
    {children}
  </button>;
};

export default Button;
