// import React, { useState } from "react";

// function Ratings() {
//   const [storevalue, setStorevalue] = useState("");

//   const handleInputChange = (e) => {
//     const trimValue = e.target.value.trim();
//     setStorevalue(trimValue);
//   };

//   const handleAddClick = () => {
//     console.log("Add button clicked");
//   };

//   return (
//     <div className="bg-skin-transparent rounded-[6px] p-4 mt-4">
//       <form className="flex flex-col sm:flex-row gap-[10px] items-center">
//        <div  className="flex w-full gap-2">
//        <input
//           className="text-skin-textblack w-full rounded-[4px] px-4 outline-none h-10 sm:w-2/3"
//           type="text"
//           value={storevalue}
//           placeholder="Eg : Family Score"
//           onChange={handleInputChange}
//         />
//         <select
//           className="text-skin-textblack rounded-[4px] px-4 outline-none h-10 sm:w-1/3"
//           placeholder="Choose one"
//         >
//           <option>Good</option>
//           <option>Average</option>
//           <option>Bad</option>
//         </select>
//        </div>
//        <div className="w-full flex justify-end">
//         <button className="btn w-full" onClick={handleAddClick}>
//           Add
//         </button></div>
//       </form>
//     </div>


//   );
// }

// export default Ratings;


{/* <button className="btn w-full" onClick={(e) => { e.preventDefault(); handleAddClick(); }}>
  Add
</button> */}



import React, { useState } from "react";

function Ratings() {
  const [storevalue, setStorevalue] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const trimValue = e.target.value.trim();
    setStorevalue(trimValue);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
    console.log("Text:", storevalue);
    console.log("Rating:", selectedRating);
    const newData = { text: storevalue, rating: selectedRating };
    setSubmittedData([...submittedData, newData]);
    setStorevalue("");
    setSelectedRating("");
  };

  return (
    <div className="bg-skin-transparent rounded-[6px] p-4 mt-4">
      <form className="flex flex-col sm:flex-row gap-[10px] items-center">
        <div className="flex w-full gap-2">
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
            <option value="">Choose one</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <div className="w-full flex justify-end">
        <button className="btn w-full" onClick={(e) => { e.preventDefault(); handleAddClick(); }}>
  Add
</button>
        </div>
      </form>

      {submittedData.map((data, index) => (
        <div key={index} className="mt-4">
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







