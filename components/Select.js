import React from "react";

const Select = ({ onClick, data }) => {
  return (
    <div className="md:ml-96 my-4">
      <select
        onClick={onClick}
        className="w-72 md:w-full appearance-none bg-gray-50 dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 
            hover:text-gray-900 dark:hover:text-gray-50 text-xl md:text-3xl "
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
