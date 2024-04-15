"use client";
import React, { useState, useEffect } from 'react';

interface Option {
  title: string;
  content: React.ReactNode;
}

interface SelectProps {
  sub: string;
  title: string;
  items: Option[];
}

const Select: React.FC<SelectProps> = ({ sub, title, items }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(items[0] || null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedOption(items[selectedIndex]);
  };

  useEffect(() => {
    // Set the default selected option when the component mounts
    setSelectedOption(items[0] || null);
  }, [items]);

  return (
    <>
      <div className="relative">
        <p className="font-bold">{sub}</p>
        <select
          onChange={handleSelectChange}
          value={selectedOption ? selectedOption.title : ''}
          className="block w-full border p-3 my-1 focus:outline-min"
        >
          {items.map((item, index) => (
            <option key={index}>{item.title}</option>
          ))}
        </select>
        <label className="block text-sm font-medium text-gray-700">{title}</label>
        {selectedOption && (
          <>{selectedOption.content}</>
        )}
      </div>
    </>
  );
};

export default Select;
