import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
// import AOS from "aos";
// import "aos/dist/aos.css";
export default function ServicesSection() {
    const [activeBlock, setActiveBlock] = useState<string | null>(null);
  
    const blocks = [
      {
        id: "strategy",
        title: "Стратегия",
        content: `We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition.`,
      },
      {
        id: "creative",
        title: "Креативност",
        content: `Our creativity drives innovative solutions, transforming ideas into compelling experiences that resonate with your target audience.`,
      },
    ];
  
    return (
      <section className="w-screen h-auto bg-black p-10">
        <h1 className="text-5xl text-center m-7 p-5 text-white font-bold mb-20">
          Нашите услуги
        </h1>
        <div className="flex flex-col gap-y-5 items-center justify-center text-black w-full">
          {blocks.map((block) => (
            <div
              key={block.id}
              onClick={() => setActiveBlock(block.id)}
              data-active={activeBlock === block.id}
              className={`group transition-all duration-700 w-full p-5 rounded-xl cursor-pointer ${
                activeBlock === block.id
                  ? "bg-white text-black h-[calc((1lh*0.85)+var(--padding)*2)]"
                  : "bg-[#1a1a1a] text-white h-fit"
              }`}
            >
              <h2 className="text-3xl font-bold px-5">{block.title}</h2>
              {activeBlock === block.id && (
                <div className="px-5 py-3">
                  <p className="mb-4">{block.content}</p>
                  <button className="btn-primary rounded-2xl px-5 py-2 bg-black text-white">
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
