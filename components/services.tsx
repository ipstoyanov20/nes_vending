import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
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
			title: "Инсталация",
			content: `Нашият екип осигурява бърза и професионална инсталация, която е съобразена с нуждите на вашия офис или дом. Ние разбираме значението на безпроблемната интеграция на машините и гарантираме, че всичко е инсталирано прецизно и ефективно, за да осигури максимална производителност.`,
		},
		{
			id: "creative",
			title: "Поддръжка",
			content: `Редовната поддръжка е ключът към дълготрайността и ефективността на нашите машини. Нашият екип осигурява навременно зареждане и сервиз, така че да може да се фокусирате върху вашия бизнес, без да се притеснявате за технически проблеми.`,
		},
	];

	return (
		<section className="w-screen h-auto bg-[#1E3E62] p-10">
			<h1 className="text-5xl text-center m-0 p-5 text-white font-bold font-nuni mb-10">
				Нашите услуги
			</h1>
			<div className="flex flex-col gap-y-5 items-center justify-center text-black w-full">
				{blocks.map((block, index) => (
					<div
						key={block.id}
						onClick={() => setActiveBlock(block.id)}
						data-active={activeBlock === block.id}
						className={cn(
							"group grid grid-rows-1 sm:grid-cols-2 sm:grid-rows-1 transition-all duration-300 w-full p-5 rounded-xl cursor-pointer",
							{
								"bg-white text-[#0b182b] text-xl": activeBlock === block.id,
								"bg-[#0B192C] text-white text-xl": activeBlock !== block.id,
							},
						)}
					>
						<h2
							className={cn(
								"font-bold px-5 h-auto font-nuni transition-all duration-300",
								{
									"text-2xl sm:text-5xl text-black mb-5 sm:mb-20":
										activeBlock === block.id, // Larger text size when active
									"text-xl sm:text-2xl text-white": activeBlock !== block.id, // Default text size when inactive
								},
							)}
						>
							{block.title}
						</h2>
						{activeBlock === block.id && (
							<div className="px-5">
								<p
									className="mb-4 font-nuni text-sm sm:text-xl w-[100%] sm:w-full"
									style={{
										opacity: 0,
										transform: index > 0 ? "translateY(-150px)" : "translateY(150px)",
									}}
									ref={sectionP}
								>
									{block.content}
								</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
