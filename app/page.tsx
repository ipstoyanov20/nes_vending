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
import SuccessStories from "@/components/how-it-works";
import ReadySection from "@/components/ready";
import ScrollTrigger from "gsap/ScrollTrigger";
import footerIcon from '../app/favicon.ico'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {faPhone } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);
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
				trigger: aboutusRef.current, 
				start: "top 80%", 
				toggleActions: "play none none none",
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
									className="font-bold nav-link relative text-3xl text-[#183D66]"
									onClick={handleToggleMenu}
									href="#aboutUs"
								>
									ЗА НАС
								</a>
							</li>
							<li>
								<a
									className="font-bold nav-link relative text-3xl text-[#183D66]"
									onClick={handleToggleMenu}
									href="#how"
								>
									КАК
								</a>
							</li>
							<li>
								<a
									className="font-bold nav-link relative text-3xl text-[#183D66]"
									onClick={handleToggleMenu}
									href="#ready"
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
								d="M4 7h15M4 12h7m-4 6h8"
							/>
						</svg>
					</button>
					<ul className="menu menu-horizontal px-1 hidden lg:flex">
						<li>
							<a
								className="font-bold text-xl nav-link relative text-[#183D66]"
								href="#aboutUs"
							>
								ЗА НАС
							</a>
						</li>
						<li>
							<a
								className="font-bold text-xl nav-link relative text-[#183D66]"
								href="#how"
							>
								КАК
							</a>
						</li>
						<li>
							<a
								className="font-bold text-xl nav-link relative text-[#183D66]"
								href="#ready"
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
						<div className="animate-blob md:scale-75 lg:md:scale-100 absolute z-[20] rounded-md -top-[100px] p-5 -right-[100px] w-[200px] h-[200px] backdrop-blur-sm bg-opacity-50 bg-[#183D66]">
							<Image
								src={vm1}
								className="scale-0 top-[-50%] left-0 absolute"
								ref={vend1Ref}
								alt="Vending Machine"
							/>
						</div>
					</div>
					<div
						data-aos="fade-up"
						className="sm:w-auto w-full z-[2] flex flex-col gap-4 items-start text-[#183D66]"
					>
						<p className="text-md sm:text-xl uppercase ">
							Вашето удоволствие <br />
							на едно копче разстояниe
						</p>
						<h1 className="text-6xl sm:text-8xl font-clash font-bold text-[#183D66]">
							<p className="overflow-hidden" ref={titleRef}>
								NES
							</p>
							<p>Vending</p>
						</h1>
						<p className="text-sm sm:text-md  italic text-wrap w-full">
							{" "}
							Перфектни за офиси, училища и обществени пространства, <br /> NES
							Vending съчетава съвременна технология с надеждност.
						</p>
						<a href="#ready">
							<button className="uppercase  text-lg font-bold button-effect overflow-hidden px-5 hover:text-white relative rounded-lg py-2 bg-transparent border-[#183D66] border-4 text-[#183D66] w-full sm:w-auto">
								Свържи се
							</button>
						</a>
					</div>
				</div>
				{/* service section */}
				<ServicesSection />
				<SuccessStories />
				<ReadySection />
			</main>
			{/* fotter */}
			<footer className="footer h-auto  w-screen bg-base-100 text-[#183D66] p-10">
				<aside>
					<Image
						src={footerIcon}
						alt="logo"
						style={{ width: "50px", height: "50px" }}
						className="z-0"
					/>
					<p>
						Nes Vending<span className="text-lg ml-2">&reg;</span>
						<br />
						All rights reserved &copy; 2024
					</p>
				</aside>
				<nav>
					<h6 className="footer-title">Социални мрежи</h6>
					<div className="grid grid-flow-col gap-4">
						<a>
							<FontAwesomeIcon icon={faTiktok} size="2x" />
						</a>
						<a href="https://www.instagram.com/nes_vending?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</a>
					</div>
				</nav>
				<nav>
					<h6 className="footer-title">Телефон</h6>
					<div className="grid grid-flow-col gap-4">
						<a
							href="tel:0877779576"
							className="flex flex-row items-center gap-2"
						>
							<FontAwesomeIcon icon={faPhone} size="2x" />
							<p className=" font-bold text-xl ml-5">087 777 9576</p>
						</a>
					</div>
				</nav>
			</footer>
		</>
	);
}
