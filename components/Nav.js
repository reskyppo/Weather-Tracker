import React from "react";

const Nav = ({ title, onClick, clicked }) => {
  const style = clicked
    ? "font-semibold border-black text-black"
    : "font-medium text-gray-600 border-gray-600";
  return (
    <div className="w-32 ">
      <section
        className={[
          "w-1/2 text-center text-lg pt-4 mx-auto border-b-4  cursor-pointer",
          style,
        ].join(" ")}
        onClick={onClick}
      >
        {title}
      </section>
    </div>
  );
};

export default Nav;
