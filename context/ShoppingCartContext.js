"use client";

import { createContext, useState, useContext } from "react";
import ShoppingCart from "@/components/ShoppingCart";

export const ShoppingCartContext = createContext({
  cartItems: [],
  getCartQuantity: () => {},
  toggleCart: () => {},
  getItemQuantity: () => {},
  addOne: () => {},
  removeOne: () => {},
  removeAll: () => {},
});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(new Map());

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
      let existingItem = cartItems.get(sku);
      setCartItems((currItems) => {
        existingItem.quantity += 1;
        return currItems.set(sku, existingItem);
      });
    }
  };

  const removeOne = (sku) => {
    const quantity = getItemQuantity(sku);

    if (quantity === 1) {
      removeAll(sku);
    } else {
      let existingItem = cartItems.get(sku);
      setCartItems((currItems) => {
        existingItem -= 1;
        return currItems.set(sku, existingItem);
      });
    }
  };

  const removeAll = (sku) => {
    return cartItems.delete(sku);
  };

  const getCartQuantity = () => {
    let totalQuantity = 0;

    for (const value of cartItems.values()) {
      totalQuantity += value.quantity;
    }

    return totalQuantity;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getCartQuantity,
        getItemQuantity,
        addOne,
        removeOne,
        removeAll,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
