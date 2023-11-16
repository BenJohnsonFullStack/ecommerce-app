import Image from "next/image";
import { useState } from "react";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-8 cursor-pointer" onClick={toggleCart}>
        <Image
          width={240}
          height={240}
          src="/cart-01.png"
          alt="a shopping cart icon"
        />
        <div className="absolute top-5 left-5 rounded-full bg-red-300 w-4 h-4 flex justify-center items-center text-xs text-black">
          3
        </div>
        {isOpen && (
          <div className="bg-gray-600 rounded-md absolute top-6 right-4 z-10">
            <h2 className="text-white py-4 px-4">Shopping Cart</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
