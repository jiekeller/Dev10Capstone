import React from 'react';

const SearchBar = ({ label, value, setValue }) => {
  return (
    <div className="flex items-center space-x-3">
      {label && <label className="text-blue-600 text-2xl font-semibold">{label}:</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default SearchBar;
