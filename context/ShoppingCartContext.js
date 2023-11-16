"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useState, useContext } from "react";

export const ShoppingCartContext = createContext({
  cartItems: [],
  openCart: () => {},
  closeCart: () => {},
  getItemQuantity: () => {},
  addOne: () => {},
  removeOne: () => {},
  removeAll: () => {},
  getTotalCost: () => {},
});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", new Map());

  const getItemQuantity = (sku) => {
    return cartItems.get(sku).quantity || 0;
  };

  const addOne = (sku) => {
    if (!cartItems.has(sku)) {
      setCartItems((currItems) =>
        currItems.set(sku, {
          sku: sku,
          quantity: 1,
        })
      );
    } else {
      const existingItem = cartItems.get(sku);
      setCartItems((currItems) => {
        existingItem.quantity += 1;
        return currItems.set(sku, existingItem);
      });
    }
  };

  const removeOne = (sku) => {
    const quantity = getItemQuantity(sku);

    if (quantity === 1) {
      removeFromCart(sku);
    } else {
      const existingItem = cartItems.get(sku);
      setCartItems((currItems) => {
        existingItem -= 1;
        return currItems.set(sku, existingItem);
      });
    }
  };
};
