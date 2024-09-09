import Image from "next/image";
import mahcine from "@/public/nes-machine.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <nav className="flex justify-between items-center w-screen px-5">
        <ul className="flex gap-4">
          <li>
            <a href="/">Начало</a>
          </li>
          <li>
            <a href="/products">Продукти</a>
          </li>
          <li>
            <a href="/contact">Контакти</a>
          </li>
          </ul>
      </nav>
      <div className="flex flex-row gap-4 w-screen items-center justify-center h-auto p-5">
        <div className="w-100%">
          <h1 className="text-8xl">НЕС ВЕНДИНГ</h1>
          <p className="text-5xl">Вашето удоволствие на едно копче разстояние</p>
          <button className="uppercase">Свържи се</button>
        </div>
        <Image
        src={mahcine}
        className="rounded-lg w-100% translate-y-[10%] -translate-x-32 z-[-1] h-auto"
        alt="Picture of the author"
        />
      </div>
    </main>
  );
}
