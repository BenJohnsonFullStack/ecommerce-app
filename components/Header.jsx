import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="py-4 px-10 flex justify-between items-center">
        <div className="flex gap-10">
          <a href="/" className="hover:text-purple-700 transition-all">
            Home
          </a>
          <a href="/store" className="hover:text-purple-700 transition-all">
            Store
          </a>
          <a href="/login" className="hover:text-purple-700 transition-all">
            Login
          </a>
        </div>
        <div className="relative w-8">
          <Image
            width={240}
            height={240}
            src="/cart.svg"
            alt="a shopping cart icon"
          />
          <div className="absolute top-5 left-5 rounded-full bg-purple-700 w-4 h-4 flex justify-center items-center text-xs text-purple-200">
            3
          </div>
        </div>
      </nav>
      <div className="w-full h-[2px] bg-black"></div>
    </header>
  );
};

export default Header;
