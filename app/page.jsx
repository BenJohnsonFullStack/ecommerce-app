import Header from "@/components/Header";
import { headers } from "@/next.config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="mt-6 px-10">
          <h1 className="text-[2rem] font-bold">The Chop House</h1>
          <h2 className="text-[1.2rem] font-bold">
            Premium cuts delivered to your door.
          </h2>
        </div>
      </main>
    </>
  );
}
