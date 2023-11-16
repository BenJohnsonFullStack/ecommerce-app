import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import { useState } from "react";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartQuantity } = useShoppingCart();
  const quantity = getCartQuantity();

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
        {quantity > 0 && (
          <div className="absolute top-5 left-5 rounded-full bg-red-300 w-4 h-4 flex justify-center items-center text-xs text-black">
            {quantity}
          </div>
        )}
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
