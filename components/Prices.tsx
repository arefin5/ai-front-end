"use client";
import React, { useState } from 'react';

interface TabItem {
  title: React.ReactNode;
  icon?: React.ReactNode; // icon is now an optional property
  content: React.ReactNode;
}

interface TabsProps {
  sub: string;
  title: string;
  dec: string;
  items: TabItem[];
}

const Prices: React.FC<TabsProps> = ({ sub, title, dec, items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-10 px-2 my-16">
        <h2 className="md:text-lg text-sm text-center font-semibold text-blue-700 mb-4">
            {sub}
        </h2>
        <h3 className="md:text-4xl text-xl md:max-w-screen-md leading-snug text-gray-700 mx-auto text-center font-bold mb-4">
            {title}
        </h3>
        <h3 className="md:text-xl text-xl md:max-w-screen-md leading-snug text-gray-700 mx-auto text-center font-bold mb-8">
            {dec}
        </h3>
        <div className="flex items-center md:justify-center">
          <div className=" inline-flex bg-[#f5f9fc] text-min rounded-full overflow-x-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer flex-none py-2 px-6 rounded-full text-sm font-light ${
                index === activeTab ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleTabClick(index)}
            >
              {item.title}
            </div>
          ))}
          </div>
        </div>
        <div className="mt-6">
            {items[activeTab].content}
        </div>
    </div>
  );
};

export default Prices;
