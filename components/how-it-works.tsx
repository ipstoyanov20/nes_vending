import React, { useEffect, useState } from "react";

// Data array containing all the items displayed in the component
const successStoriesData = [
	{
		id: 1,
		title: "Приятна атмосфера за",
		subtitle: "екипа ви",
		imgUrl: "nes-machine.png", // Replace with actual image URL
		bgColor: "bg-gray-100",
		textColor: "text-gray-800",
		isLarge: true,
		buttonText: "Уют",
	},
	{
		id: 2,
		title: "Професионално",
		subtitle: "кафе у дома",
		imgUrl: "nes-machine.png", // Replace with actual image URL
		bgColor: "bg-yellow-400",
		textColor: "text-black",
		isLarge: true,
		buttonText: "Комфорт",
	},
	{
		id: 3,
		title: "Модерен дизайн",
		subtitle: "и удобство",
		imgUrl: "nes-machine.png", // Replace with actual image URL
		bgColor: "bg-gray-700",
		textColor: "text-white",
		isLarge: true,
		buttonText: "Стил",
	},
];

const SuccessStories = () => {
	// State to track if "See our work" button is clicked
	const [isWorkVisible, setIsWorkVisible] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
	  // Function to update window width
	  const handleResize = () => setWindowWidth(window.innerWidth);
  
	  // Set initial width
	  handleResize();
  
	  // Add event listener
	  window.addEventListener('resize', handleResize);
  
	  // Cleanup listener on component unmount
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
	// Function to handle button click
	const handleButtonClick = () => {
		setIsWorkVisible(!isWorkVisible); // Toggle the state
	};

	return (
		<section className="grid w-screen h-[100vh] md:h-[70vh] grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 place-items-center place-content-center p-8 bg-white">
			{/* Left section */}
			<div className="flex flex-col space-y-6 md:w-1/2">
				<h1 className="text-4xl text-[#0b182b] font-bold leading-tight">
					Партньори в <br />една успешна история
				</h1>
				<button
					onClick={handleButtonClick}
					className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 font-medium w-fit z-[100]"
				>
					Виж тук
				</button>
			</div>

			{/* Right section */}
			<div className="flex flex-col justify-start items-start relative md:flex-row gap-4 w-[100%] h-80 md:mt-0">
				<div className="absolute scale-[45%] sm:scale-[60%] top-[-20%] sm:top-[-70%] md:scale-100 sm:left-[10%] md:top-[-30%] transition-all duration-500 ease-in-out">
					{successStoriesData.map((item, index) => (
						<div
							key={item.id}
							className={`${
								item.bgColor
							} absolute top-10 w-[253px] p-4 rounded-lg shadow-lg flex ${
								item.isLarge ? "flex-col items-start" : "items-center"
							} transition-all duration-500 ease-in-out`}
							// Conditionally adjust the left position based on isWorkVisible state
							style={{
								zIndex: index,
								left: `${index * 100}px`, // Default position for equal spacing
								// Apply margin adjustments when "See our work" is clicked
								transform:
									windowWidth > 768
										? index === 0 && isWorkVisible // First card
											? "translateX(-180px)" // Move forward to the left
											: index === successStoriesData.length - 1  && isWorkVisible // Last card
											? "translateX(180px)" // Move forward to the right
											: "none"
										: isWorkVisible
										? index === 1
											? `translateX(${index * 200}px) translateY(${0}px)`
											: index === 2
											? `translateX(${-180}px) translateY(${
													index * 240
											  }px)`
											: "none"
										: `translateX(${index * 50}px) translatey(${
												index * 100
										  }px)`,
							}}
						>
							<img
								src={item.imgUrl}
								alt={item.title}
								className={`rounded-md ${
									item.isLarge
										? "h-[50%] w-full mb-4 object-fit"
										: "h-16 object-cover"
								}`}
							/>
							<span
								className={`ml-4 text-lg whitespace-nowrap font-semibold ${item.textColor}`}
							>
								{item.title}
							</span>
							<span
								className={`ml-4 text-lg whitespace-nowrap font-semibold ${item.textColor}`}
							>
								{item.subtitle}
							</span>
							{item.isLarge && (
								<button className="mt-2 px-4 py-1 bg-gray-300 rounded-full text-gray-700 font-medium">
									{item.buttonText}
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
