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
	const [isWorkVisible, setIsWorkVisible] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
	  const handleResize = () => setWindowWidth(window.innerWidth);
  
	  handleResize();
  
	  window.addEventListener('resize', handleResize);
  
	  return () => window.removeEventListener('resize', handleResize);
	}, []);
	const handleButtonClick = () => {
		setIsWorkVisible(!isWorkVisible); 
	};

	return (
		<section id="how" className="grid w-screen h-[150vh] md:h-[70vh] grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 place-items-start sm:place-items-center place-content-center p-8 bg-white">
			<div className="flex flex-col space-y-6 md:w-1/2">
				<h1 className="text-4xl text-[#0b182b] font-bold leading-tight">
					Партньори в една <br /> успешна история
				</h1>
				<button
					onClick={handleButtonClick}
					className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 font-medium w-fit z-[100]"
				>
					Виж тук
				</button>
			</div>

			<div className="flex flex-col justify-start items-start relative md:flex-row gap-4 w-[100%] h-80 md:mt-0">
				<div className="scale-[45%] sm:scale-[60%] top-[-20%] sm:top-[-70%] md:scale-[80%] sm:left-[10%] md:top-[-10%] transition-all duration-500 ease-in-out absolute">
					{successStoriesData.map((item, index) => (
						<div
							key={item.id}
							className={`${
								item.bgColor
							} absolute top-10 w-[253px] p-4 rounded-lg shadow-lg flex ${
								item.isLarge ? "flex-col items-start" : "items-center"
							} transition-all duration-500 ease-in-out`}
							style={{
								zIndex: index,
								left: `${index * 100}px`,
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
