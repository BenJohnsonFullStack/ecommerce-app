import { useShoppingCart } from "@/context/ShoppingCartContext";
import Image from "next/image";
import { useState } from "react";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartQuantity, cartItems, removeAll } = useShoppingCart();
  const cartQuantity = getCartQuantity();

  const products = [...cartItems.values()];

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
        {cartQuantity > 0 && (
          <div className="absolute top-5 left-5 rounded-full bg-red-300 w-4 h-4 flex justify-center items-center text-xs text-black">
            {cartQuantity}
          </div>
        )}
        {isOpen && (
          <div className="bg-black rounded-md absolute top-6 right-4 z-10 p-6">
            {cartQuantity === 0 ? (
              <h3 className="text-white text-center">Cart Empty</h3>
            ) : (
              <>
                {products.map((product) => (
                  <div key={product.sku} className="my-6">
                    <div className="border-t-2 border-t-white my-1"></div>
                    <div className="flex gap-10 items-center px-4">
                      <div className="text-white">
                        <h3 className="text-xs">SKU: {product.sku}</h3>
                        <h3 className="mt-4 text-xs italic">
                          QTY: {product.quantity}
                        </h3>
                      </div>
                      <button
                        className="bg-red-500 text-sm px-4 py-1 rounded-md"
                        onClick={() => removeAll(product.sku)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="border-t-2 border-t-white mt-2"></div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
