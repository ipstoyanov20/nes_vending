import React from "react";

function ServicesSection() {
	return (
		<section className="w-screen h-screen bg-black">
			<h1 className="text-5xl text-center m-7 p-5 text-white">Нашите услуги</h1>
			<div className=" flex flex-col gap-y-10 items-center justify-center text-white">
				<div className="grid grid-cols-2">
					<h2>Helloo</h2>
					<article className="flex flex-col gap-10">
						<p>
							asddddddddddddddddddddddddddddddddddddd
						</p>
						<button>CLcikk</button>
					</article>
				</div>
				<div className="grid grid-cols-2">
					<h2>Hello</h2>
					<article className="flex flex-col gap-10">
						<p>sddddddddddddddddd</p>
						<button>Click</button>
					</article>
				</div>
			</div>
		</section>
	);
}

export default ServicesSection;
