import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import AOS from "aos";
import "aos/dist/aos.css";
import cn from "classnames"; // Importing the classnames utility

export default function ServicesSection() {
  const sectionP = useRef(null);
	useEffect(() => {
		AOS.init();
    gsap.to(sectionP.current, {
      duration: 0.5,
      ease: "power4.out",
      opacity: 1,
      y: 0,
    });
	});

	const [activeBlock, setActiveBlock] = useState<string | null>(null);

	const blocks = [
		{
			id: "strategy",
			title: "Стратегия",
			content: `Графичните и типографските оператори знаят това добре, в действителност всички професии, занимаващи се с комуникационната вселена, имат стабилна връзка с тези думи, но какво е това?`,
		},
		{
			id: "creative",
			title: "Креативност",
			content: `Графичните и типографските оператори знаят това добре, в действителност всички професии, занимаващи се с комуникационната вселена, имат стабилна връзка с тези думи, но какво е това?`,
		},
	];

	return (
		<section className="w-screen h-auto bg-[#1E3E62] p-10">
			<h1 className="text-5xl text-center m-0 p-5 text-white font-bold font-nuni mb-10">
				Нашите услуги
			</h1>
			<div className="flex flex-col gap-y-5 items-center justify-center text-black w-full">
				{blocks.map((block) => (
					<div
						key={block.id}
						onClick={() => setActiveBlock(block.id)}
						data-active={activeBlock === block.id}
						className={cn(
							"group grid grid-cols-2 transition-all duration-300 w-full p-5 rounded-xl cursor-pointer",
							{
								"bg-white text-[#0b182b] text-xl":
									activeBlock === block.id ,
								"bg-[#0B192C] text-white text-xl": activeBlock !== block.id,
							},
						)}
					>
						<h2
							className={cn("font-bold font-nuni transition-all duration-300", {
								"text-5xl text-black mb-20": activeBlock === block.id, // Larger text size when active
								"text-2xl text-white": activeBlock !== block.id, // Default text size when inactive
							})}
						>
							{block.title}
						</h2>
						{activeBlock === block.id && (
							<div className="px-5 py-3 overflow-hidden">
								<p className="mb-4 font-nuni translate-y-10" ref={sectionP} >{block.content}</p>
								<button className="btn-primary font-nuni bg-[#0b182b] rounded-2xl px-5 py-2 bg-black text-white">
									Read more
								</button>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
