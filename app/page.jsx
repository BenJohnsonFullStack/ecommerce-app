import { headers } from "@/next.config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex gap-10">
          <a href="/">Home</a>
          <a href="/store">Store</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <main></main>
    </>
  );
}
