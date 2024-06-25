import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { BASE_URL, params } from "../utils/api";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchSuggestions = async (input) => {
    try {
      setLoading(true);
      const url = `${BASE_URL}?key=${params.key}&cx=${params.cx}&q=${input}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.items) {
        const suggestions = data.items.map((item) => item.title); // Adjust based on API response structure
        setSuggestions(suggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    navigate(`/${searchQuery}/${1}`);
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div>
      <div
        id="searchBox"
        className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl  focus-within:shadow-c focus-within:border-1 transition duration-100">
        <AiOutlineSearch size={18} color="#9aa0a6" />
        <input
          type="text"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            fetchSuggestions(e.target.value); // Fetch suggestions on input change
          }}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          autoFocus
          className="grow outline-0 text-black/[0.87]"
        />

        <div className="flex items-center gap-3">
          {searchQuery && (
            <IoMdClose
              size={24}
              color="#70757a"
              className="cursor-pointer xl:w-auto w-[60px] rounded-full p-1 hover:bg-black/[0.2] duration-300"
              onClick={() => {
                setSearchQuery("");
                setSuggestions([]);
              }}
            />
          )}
          <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
          <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
        </div>
      </div>
      {suggestions.length > 0 && (
        <ul className=" w-[325px] md:w-[545px]  absolute ml-5 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion
                .split(" ")
                .map((el) => el.replace(/[^a-zA-Z0-9]/g, " "))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
