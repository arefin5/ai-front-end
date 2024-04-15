import Image from 'next/image';
import React from 'react';

interface Item {
  img: string;
  sub: string;
  title: string;
}

interface DoesProps {
  sub: string;
  title: string;
  items: Item[];
}

const Does: React.FC<DoesProps> = ({ sub, title, items }) => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-10 px-2 my-16">
      <h2 className="md:text-lg text-sm text-center font-semibold text-blue-700 mb-4">
        {sub}
      </h2>
      <h3 className="md:text-4xl text-xl md:max-w-screen-md leading-snug text-gray-700 mx-auto text-center font-bold mb-8">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4">
            <Image
                width={400}
                height={400}
                src={item.img}
                alt={item.title}
                className="mb-4 w-full max-h-52"
            />
            <h4 className="text-lg font-bold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Does;