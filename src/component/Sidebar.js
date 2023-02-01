import React from 'react';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, handleSelectedCategory }) => {
  return (
    <div className="w-full md:w-60 p-5 h-auto md:h-[90vh] overflow-x-scroll md:overflow-x-auto md:overflow-y-scroll  border-r border-gray-400">
      <div className="gap-5 flex md:flex-col">
        {categories.map((item, ind) => {
          return (
            <div
              className={`rounded-full p-2 font-semibold flex gap-2 ${
                selectedCategory === item.name
                  ? 'bg-[red] text-white'
                  : 'bg-slate-300'
              }`}
              onClick={() => handleSelectedCategory(item.name)}
              key={ind}
            >
              <h4>{item.icon}</h4>
              <pre className=" break-normal">
                {item.name.length < 20
                  ? `${item.name}`
                  : `${item.name.substring(0, 18)}`}
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
