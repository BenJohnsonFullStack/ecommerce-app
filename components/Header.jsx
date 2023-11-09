import Image from "next/image";
import Divider from "./Divider";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="py-4 px-10 flex justify-between items-center">
        <div className="flex gap-10">
          <Link
            href="/"
            className="hover:text-red-600 transition-all font-semibold"
          >
            Home
          </Link>
          <Link
            href="/store"
            className="hover:text-red-600 transition-all font-semibold"
          >
            Store
          </Link>
          <Link
            href="/login"
            className="hover:text-red-600 transition-all font-semibold"
          >
            Login
          </Link>
        </div>
        <div className="relative w-8 cursor-pointer">
          <Image
            width={240}
            height={240}
            src="/cart.svg"
            alt="a shopping cart icon"
          />
          <div className="absolute top-5 left-5 rounded-full bg-red-300 w-4 h-4 flex justify-center items-center text-xs text-black">
            3
          </div>
        </div>
      </nav>
      <Divider />
    </header>
  );
};

export default Header;
