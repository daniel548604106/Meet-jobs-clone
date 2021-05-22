import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const SearchBar = () => {
  const isSearchBarShow = useSelector((state) => state.global.isSearchBarShow);
  return (
    <div
      className={`
          bg-gray-300  fixed z-40 w-full top-60px transition-all duration-300 max-h-0 overflow-hidden
        ${isSearchBarShow && ' max-h-auto'} `}
    >
      <div className=" py-2 flex flex-col sm:flex-row max-w-760px mx-auto px-3">
        <input
          type="text"
          placeholder="Job,Company or Keyword"
          className="px-4 py-3 rounded flex-1 mb-2 sm:mb-0 sm:mr-2"
        />
        <input
          type="text"
          placeholder="City or Country"
          className="px-4 py-3 rounded flex-1 mb-2 sm:mb-0 sm:mr-2"
        />
        <button className="bg-blue-500 py-3 text-white  min-w-100px rounded hover:opacity-80">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
