import React from "react";

const Navbar = ({ title, clicked, onClick }) => {
  const borderColor = clicked ? " border-gray-900" : "border-gray-400";
  return (
    <div
      className={[
        borderColor,
        "text-3xl font-semibold m-2 py-2 border-b-2 cursor-pointer",
      ].join(" ")}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Navbar;
