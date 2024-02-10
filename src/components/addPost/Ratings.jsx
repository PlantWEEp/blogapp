import React, { useState } from "react";

function Ratings() {
  const [storevalue, setStorevalue] = useState("");

  const handleInputChange = (e) => {
    const trimValue = e.target.value.trim();
    setStorevalue(trimValue);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div className="bg-skin-transparent rounded-[6px] p-4 mt-4">
      <form className="flex flex-col sm:flex-row gap-[10px] items-center">
       <div  className="flex w-full gap-2">
       <input
          className="text-skin-textblack w-full rounded-[4px] px-4 outline-none h-10 sm:w-2/3"
          type="text"
          value={storevalue}
          placeholder="Eg : Family Score"
          onChange={handleInputChange}
        />
        <select
          className="text-skin-textblack rounded-[4px] px-4 outline-none h-10 sm:w-1/3"
          placeholder="Choose one"
        >
          <option>Good</option>
          <option>Average</option>
          <option>Bad</option>
        </select>
       </div>
       <div className="w-full flex justify-end">
        <button className="btn w-full" onClick={handleAddClick}>
          Add
        </button></div>
      </form>
    </div>
  );
}

export default Ratings;
