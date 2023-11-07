import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
