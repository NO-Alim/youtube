import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      navigate(`/search/${searchText}`);
      setSearchText('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex items-center justify-center rounded-full overflow-hidden pl-5"
    >
      <input
        type="text"
        className="outline-none focus:outline-none"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-full place-content-center w-10 h-10"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
