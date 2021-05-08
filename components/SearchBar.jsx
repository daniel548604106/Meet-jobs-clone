import React, { useState } from 'react';

const SearchBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`
          bg-gray-300 hidden fixed z-40 w-full top-0  ease-in-out duration-300
        ${active && 'translate-y-full transform transition-all'} `}
    >
      <div className="h-60px py-2 flex flex-col sm:flex-row max-w-760px mx-auto px-3">
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
