// SuccessStories.tsx
import React from 'react';

// Data array containing all the items displayed in the component
const successStoriesData = [
  {
    id: 1,
    title: "Filling Pieces",
    imgUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
    isLarge: true,
    buttonText: "Headless",
  },
  {
    id: 2,
    title: "Mr Marvis",
    imgUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    isLarge: true,
    buttonText: "Headless",
  },
  {
    id: 3,
    title: "Denham",
    imgUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    bgColor: "bg-gray-700",
    textColor: "text-white",
    isLarge: true,
    buttonText: "Headless",
  },
];

const SuccessStories = () => {
  return (
    <section className="grid w-screen grid-cols-2 md:grid-cols-1 md:grid-rows-2 items-center justify-between p-8 bg-white">
      {/* Left section */}
      <div className="flex flex-col space-y-6 md:w-1/2">
        <h1 className="text-4xl text-[#0b182b] font-bold leading-tight">
          Патрниор in success stories
        </h1>
        <button className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 font-medium w-fit">
          See our work
        </button>
      </div>

      {/* Right section */}
      <div className="flex flex-col relative md:flex-row gap-4 w-[100%] h-80 md:mt-0">
        

        {successStoriesData.map((item) => (
          <div
          key={item.id}
          className={`${item.bgColor} absolute top-10 left-[${item.id*30}%] p-4 rounded-lg shadow-lg flex ${item.isLarge ? 'flex-col items-start' : 'items-center'}`}
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              className={`rounded-md ${item.isLarge ? 'h-32 w-full mb-4 object-cover' : 'h-16 object-cover'}`}
              />
            <span className={`ml-4 text-lg font-semibold ${item.textColor}`}>
              {item.title}
            </span>
            {/* Render button if item is large (Denham) */}
            {item.isLarge && (
              <button className="mt-2 px-4 py-1 bg-gray-300 rounded-full text-gray-700 font-medium">
                {item.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
