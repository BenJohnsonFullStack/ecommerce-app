import Header from "@/components/Header";
import { headers } from "@/next.config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="py-12 px-10 bg-home-hero bg-cover bg-center relative isolate after:absolute after:inset-0 after:bg-black after:opacity-70 after:z-[-1]">
          <div>
            <h1 className="text-[2rem] font-bold text-white">The Chop House</h1>
            <h2 className="text-sm text-white py-2">
              Premium cuts delivered to your door.
            </h2>
          </div>
          <div className="w-1/2 mx-auto text-center bg-red-300 shadow-lg rounded-md mt-8 text-black py-2 cursor-pointer hover:bg-red-600 transition-color duration-200">
            <a href="/store">Order Now</a>
          </div>
        </div>
      </main>
    </>
  );
}
