import React from "react";

const Nav = ({ title, onClick }) => {
  return (
    <div className="w-32 ">
      <p
        className="w-1/2 text-center pt-4 mx-auto border-b cursor-pointer"
        onClick={onClick}
      >
        {title}
      </p>
    </div>
  );
};

export default Nav;
