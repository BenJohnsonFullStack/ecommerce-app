import { headers } from "@/next.config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex gap-10 py-2 px-4">
          <a href="/" className="hover:text-purple-700 transition-all">
            Home
          </a>
          <a href="/store" className="hover:text-purple-700 transition-all">
            Store
          </a>
          <a href="/login" className="hover:text-purple-700 transition-all">
            Login
          </a>
          {/* ADD CART ICON */}
        </nav>
        <div className="w-full h-[2px] bg-black"></div>
      </header>
      <main>
        <div className="pt-6 px-10">
          <h1 className="text-[2.4rem] font-bold">The Chop House</h1>
          <h2 className="text-[1.2rem] font-bold pl-2">
            Premium cuts delivered to your door.
          </h2>
        </div>
      </main>
    </>
  );
}
