import Image from "next/image";
import mahcine from "@/public/nes-machine.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="grid grid-cols-2 gap-4">
        <div className="w-100%">
          <h1 className="text-8xl">НЕС ВЕНДИНГ</h1>
          <p className="text-5xl">Вашето удоволствие на едно копче разстояние</p>
          <button></button>
        </div>
        <Image
        src={mahcine}
        className="rounded-lg w-100%"
        alt="Picture of the author"
        />
      </div>
    </main>
  );
}
