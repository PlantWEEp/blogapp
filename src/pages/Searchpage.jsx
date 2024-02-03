


// import React from "react";
// import Header from "../schemas/header";

// const Searchpage = () => {
//   return (
//     <>
//       <div className="bg-skin-base h-screen">
//         <div>
//           <Header />
//         </div>
//         <div className="flex items-center justify-center mt-[90px]">
//           <h3 className="text-custom-h3 text-skin-textwhite">
//             Explore Location or Find User
//           </h3>
//         </div>
//         <div className="flex items-center justify-center mt-4">
//           <div className="relative text-skin-textwhite ">
//             <input
//               type="text"
//               placeholder="Search for your favorite place"
//               className="py-2 px-4 rounded-[60px] bg-skin-base border  border-skin-whitecolor focus:outline-none 
//                placeholder-skin-textgray w-[350px]"
//             />
//             <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
//               {/* You can replace the following div with your search icon */}
//               <div className="w-5 h-5 bg-skin-whitecolor"></div>
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Searchpage;



import React, { useState } from "react";
import Header from "../schemas/header";

const Searchpage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle changes in the search input
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // For demonstration purposes, you can replace this with your own logic to fetch suggestions.
    // This example uses a simple array of suggestions.
    const dummySuggestions = ["Trivandrum", "Tamilnadu", "Thailand", "Turkey"];
    const filteredSuggestions = dummySuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions);

    // If there are no suggestions matching the query, show an error message
    if (filteredSuggestions.length === 0) {
      setSuggestions(["This place is not available"]);
    }
  };

  return (
    <>
      <div className="bg-skin-base h-screen">
        <div>
          <Header />
        </div>
        <div className="flex items-center justify-center mt-[90px]">
          <h3 className="text-custom-h3 text-skin-textwhite">
            Explore Location or Find User
          </h3>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="relative text-skin-textwhite ">
            <input
              type="text"
              placeholder="Search for your favorite place"
              value={searchQuery}
              onChange={handleInputChange}
              className="py-2 px-4 rounded-[60px] bg-skin-base border border-skin-whitecolor focus:outline-none placeholder-skin-textgray w-[350px]"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {/* You can replace the following div with your search icon */}
              <div className="w-5 h-5 bg-skin-whitecolor"></div>
            </span>
          </div>
        </div>
        {/* Display suggestions or error message */}
        {searchQuery && (
          <div className="mt-2 mx-4">
            <ul className="bg-skin-dark border border-skin-secondary rounded-md p-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="text-skin-textwhite cursor-pointer hover:bg-skin-secondary py-1 px-2"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Searchpage;




