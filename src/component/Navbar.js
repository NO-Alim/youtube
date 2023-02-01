import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => (
  <div className="px-10 flex justify-between items-center bg-slate-200 fixed w-full h-[10vh] top-0 overflow-hidden z-10">
    <Link to="/" className="flex items-center justify-center gap-2">
      <img src={logo} alt="logo" className="w-10" />
      <h1 className="text-black text-xl font-bold">YouTube</h1>
    </Link>
    <SearchBar />
  </div>
);

export default Navbar;
