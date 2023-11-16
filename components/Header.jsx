"use client";

import Divider from "./Divider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="py-4 px-10 flex justify-between items-center">
        <div className="flex gap-10">
          <Link
            href="/"
            className={`hover:text-red-600 transition-all font-semibold ${
              pathname === "/" ? "text-red-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/store"
            className={`hover:text-red-600 transition-all font-semibold ${
              pathname === "/store" ? "text-red-600" : ""
            }`}
          >
            Store
          </Link>
        </div>
        <ShoppingCart />
      </nav>
      <Divider />
    </header>
  );
};

export default Header;
