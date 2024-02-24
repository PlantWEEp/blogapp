import React, { useState } from "react";
import {toast} from "react-toastify"

function Ratings() {
  const [storevalue, setStorevalue] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => { 
    setStorevalue(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleAddClick = () => { 
    if (storevalue === "") {
      toast.error("Ratings cant be empty");
    } 
    else if (selectedRating === "") {
      toast.error("Select a ratings");
    }
    else {
      const newData = { text: storevalue, rating: selectedRating };
      setStorevalue("");
      setSelectedRating("");
      setSubmittedData([...submittedData, newData]);
    }
  };
  
  

  return (
    <div className="bg-skin-transparent rounded-[6px] p-4 mt-4">
      <form className="flex flex-col justify-start sm:flex-row gap-[10px] items-center">
          <h6 className="text-custom-h6 w-full">Ratings</h6>
        <div className="flex w-full  gap-2">
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
            value={selectedRating}
            onChange={handleRatingChange}
          >
            <option>Choose one</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="btn w-full"
            onClick={(e) => {
              e.preventDefault();
              handleAddClick();
            }}
          >
            Add
          </button>
        </div>
      </form>
      {submittedData.map((data, index) => (
        <div key={index} className="mt-4 flex gap-3 flex-col-reverse">
          <div className="flex justify-between gap-[10px]">
            {data.rating === "good" && (
              <>
                <div className="h-4 w-full bg-green-500 rounded-full "></div>
                <div className="h-4 w-full bg-green-500 rounded-full"></div>
                <div className="h-4 w-full bg-green-500 rounded-full"></div>
              </>
            )}
            {data.rating === "average" && (
              <>
                <div className="h-4 w-full bg-yellow-500 rounded-full"></div>
                <div className="h-4 w-full bg-yellow-500 rounded-full"></div>
              </>
            )}
            {data.rating === "bad" && (
              <>
                <div className="h-4 w-full bg-red-500 rounded-full"></div>
              </>
            )}
          </div>
          <div className="mt-1">{data.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Ratings;
