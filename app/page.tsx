"use client";
import Image from "next/image";
import mahcine from "@/public/nes-machine.png";
import vm1 from "@/public/vendingm1.png";
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import SplitType from "split-type";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesSection from "@/components/services";
import SuccessStories from "@/components/bento-first";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin
export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const titleRef = useRef(null);
	const aboutusRef = useRef(null);
	const vend1Ref = useRef(null);
	const vend2Ref = useRef(null);
	useEffect(() => {
		AOS.init();
		titleRef.current ? new SplitType(titleRef.current) : null;
		aboutusRef.current ? new SplitType(aboutusRef.current) : null;
		let titleChars = document.querySelectorAll("h1 .char");
		let aboutChars = document.querySelectorAll("h2 .char");

		for (let i = 0; i < titleChars.length; i++) {
			titleChars[i].classList.add("translate-y-[300%]");
		}
		for (let i = 0; i < aboutChars.length; i++) {
			aboutChars[i].classList.add("translate-y-[300%]");
		}
		
		gsap.to(titleChars, {
			y: 0,
			stagger: 0.05,
			duration: 0.6,
			opacity: 1,
			delay: 0,
			
		});
		gsap.to(aboutChars, {
			y: 0,
			stagger: 0.05,
			duration: 0.6,
			opacity: 1,
			delay: 0.5,
			scrollTrigger: {
				trigger: aboutusRef.current, // Element that triggers the animation
				start: "top 80%", // Start animation when top of element is 80% from the top of the viewport
				toggleActions: "play none none none", // Play animation on scroll in
			  },
		});
		gsap.to(vend1Ref.current, {
			y: 0,
			stagger: 0.05,
			duration: 0.6,
			opacity: 1,
			delay: 1,
			transform: "scale(0.5)",
		});
		gsap.to(vend2Ref.current, {
			y: 0,
			stagger: 0.05,
			duration: 0.6,
			opacity: 1,
			delay: 0.5,
			transform: "scale(1)",
		});
	}, []);
  
  return (
		<>
			<div className="navbar fixed flex flex-row justify-between bg-background z-[120] bg-white">
				<div className="flex-1">
					<a href={`/`} className="btn-circle text-xl">
						<Image src={`/icon.png`} width={50} height={50} alt={`Logo`} />
					</a>
				</div>
				<div
					className={`lg:hidden fixed block inset-0 bg-white backdrop-blur-sm bg-opacity-80 z-50 pt-10 transition-transform duration-1000 ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="bg-transparent rounded-lg p-5 flex">
						<ul className="menu menu-vertical">
							<li>
								<a
									className="font-grotesk font-bold nav-link relative text-4xl text-[#183D66]"
									onClick={handleToggleMenu}
									href="#genres"
								>
									ЗА НАС
								</a>
							</li>
							<li>
								<a
									className="font-grotesk font-bold nav-link relative text-4xl text-[#183D66]"
									onClick={handleToggleMenu}
									href="#how"
								>
									КАК
								</a>
							</li>
							<li>
								<a
									className="font-grotesk font-bold nav-link relative text-4xl text-[#183D66]"
									onClick={handleToggleMenu}
									href="#order"
								>
									СВЪРЖЕТЕ СЕ
								</a>
							</li>
						</ul>
					</div>
					<button
						className="btn absolute top-2 right-2 btn-square btn-ghost bg-[#183D66]"
						onClick={handleToggleMenu}
					>
						X
					</button>
				</div>
				<div className="flex-none">
					<button
						className="btn btn-square btn-ghost bg-[#183D66] lg:hidden mt-0 -ml-[max(50%,calc(50px-50%))]"
						onClick={handleToggleMenu}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 transition-transform duration-300"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								stroke="currentColor"
								d="M4 7h15M4 12h7m-4 6h8" // Changed the form of the lines
							/>
						</svg>
					</button>
					<ul className="menu menu-horizontal px-1 hidden lg:flex">
						<li>
							<a
								className="font-grotesk font-bold text-xl nav-link relative text-[#183D66]"
								href="#genres"
							>
								ЗА НАС
							</a>
						</li>
						<li>
							<a
								className="font-grotesk font-bold text-xl nav-link relative text-[#183D66]"
								href="#how"
							>
								КАК
							</a>
						</li>
						<li>
							<a
								className="font-grotesk font-bold text-xl nav-link relative text-[#183D66]"
								href="#order"
							>
								СВЪРЖЕТЕ СЕ
							</a>
						</li>
					</ul>
				</div>
			</div>

			<main className="flex min-h-screen w-screen flex-col items-center pt-32 sm:pt-10 bg-base-100">
				{/* hero section */}
				<div className="flex flex-row sm:gap-[20%] gap-0 w-screen items-center justify-center h-auto sm:h-screen p-5">
					<div className="relative w-full sm:w-auto lg:max-2xl:translate-y-3 lg:max-2xl:scale-[70%] sm:block hidden">
						<Image
							src={mahcine}
							className="rounded-lg z-[1] h-auto"
							alt="Vending Machine"
						/>
						<div className="animate-blob absolute z-[20] rounded-md -top-[100px] p-5 -right-[100px] w-[200px] h-[200px] backdrop-blur-sm bg-opacity-50 bg-[#183D66]">
							<Image
								src={vm1}
								className="scale-0 top-[-50%] left-0 absolute"
								ref={vend1Ref} 	
								alt="Vending Machine"
							/>
						</div>
						{/* <div className="absolute z-[20] rounded-md -bottom-[100px] p-5 -left-[100px] w-[200px] h-[200px] backdrop-blur-sm bg-opacity-50 bg-[#183D66]">
							<Image
								src={vm1}
								className="scale-0"
								alt="Vending Machine"
								ref={vend2Ref}
							/>
						</div> */}
					</div>
					<div
						data-aos="fade-up"
						className="sm:w-auto w-full z-[2] flex flex-col gap-4 items-start text-[#183D66]"
					>
						<p className="text-xl uppercase">
							Вашето удоволствие <br />
							на едно копче разстояниe
						</p>
						<h1 className="text-7xl sm:text-8xl font-clash font-bold text-[#183D66]">
							<p className="overflow-hidden" ref={titleRef}>
								NES
							</p>
							<p>Vending</p>
						</h1>
						<p className="text-md italic text-wrap w-full"> Перфектни за
							офиси, училища и обществени пространства, <br /> NES Vending съчетава
							съвременна технология с надеждност.
						</p>
						<button className="uppercase text-lg font-bold button-effect overflow-hidden px-5 hover:text-white relative rounded-lg py-2 bg-transparent border-[#183D66] border-4 text-[#183D66] w-full sm:w-auto">
							Свържи се
						</button>
					</div>
				</div>
				{/* service section */}
				<ServicesSection/>
				<SuccessStories/>
			</main>
			{/* fotter */}
			<footer className="footer h-auto w-screen bg-base-100 text-[#183D66] p-10">
				<aside>
					<svg
						width="50"
						height="50"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fillRule="evenodd"
						clipRule="evenodd"
						className="fill-current"
					>
						<path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
					</svg>
					<p>
						ACME Industries Ltd.
						<br />
						Providing reliable tech since 1992
					</p>
				</aside>
				<nav>
					<h6 className="footer-title">Social</h6>
					<div className="grid grid-flow-col gap-4">
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</a>
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
							</svg>
						</a>
					</div>
				</nav>
			</footer>
		</>
	);
}
