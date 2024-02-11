import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchpage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const dummySuggestions = ["Trivandrum", "Tamilnadu", "Thailand", "Turkey","Trivandrum", "Tamilnadu", "Thailand", "Turkey"];
    const filteredSuggestions = dummySuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    if (filteredSuggestions.length === 0) {
      setSuggestions(["This place is not available"]);
    }
  };

  return (
    <>
      <div className="bg-skin-base h-screen container">
        <div className="flex items-center justify-center mt-[90px] ">
          <h3 className="text-custom-h3 text-skin-textBase">
            Explore Location or Find User
          </h3>
        </div>
        <div className="flex items-center justify-center mt-4 flex-col">
          <div className="relative text-skin-textBase">
            <div className="flex items-center border border-skin-whitecolor rounded-[60px] overflow-hidden">
              <input
                type="text"
                placeholder="Search for your favorite place"
                value={searchQuery}
                onChange={handleInputChange}
                className="py-2 px-4 w-[350px] bg-skin-base focus:outline-none placeholder-skin-textgray"
              />
              <span className="p-2 bg-skin-secondary"> 
                <CiSearch className="text-skin-textBase text-[24px]" />
              </span>
            </div>
          {/* Display suggestions or error message */}
          {searchQuery && (
            <div className="mt-2 mx-4">
              <ul className="bg-skin-dark border border-skin-secondary rounded-md p-2 max-h-[184px] overflow-x-auto scroll-smooth ">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="text-skin-textBase cursor-pointer hover:bg-skin-transparent p-[10px] rounded-md"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchpage;
