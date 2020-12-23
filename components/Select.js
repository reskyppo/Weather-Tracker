import React from "react";

const Select = ({ onClick, data, bgColor }) => {
  return (
    <div className="md:ml-96 my-4">
      <select
        onClick={onClick}
        className={[
          "w-72 md:w-full appearance-none text-xl md:text-3xl",
          bgColor,
        ].join(" ")}
      >
        {data.map((dat) => (
          <option key={dat.id} value={dat.id}>
            {`${dat.kecamatan}, ${dat.kota}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
