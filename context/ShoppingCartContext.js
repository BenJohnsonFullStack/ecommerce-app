"use client";

import { createContext, useState, useContext } from "react";

export const ShoppingCartContext = createContext({
  cartItems: {},
  getCartQuantity: () => {},
  getItemQuantity: () => {},
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
    const item = cartItems.get(sku);
    return item ? item.quantity || 0 : 0;
  };

  const addOne = (sku) => {
    setCartItems((prevItems) => {
      const updatedItems = new Map(prevItems);

      if (!updatedItems.has(sku)) {
        updatedItems.set(sku, {
          sku: sku,
          quantity: 1,
        });
      } else {
        let existingItem = updatedItems.get(sku);
        existingItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        updatedItems.set(sku, existingItem);
      }
      return updatedItems;
    });
  };

  const removeOne = (sku) => {
    const quantity = getItemQuantity(sku);

    if (quantity === 1) {
      removeAll(sku);
    } else {
      setCartItems((prevItems) => {
        const updatedItems = new Map(prevItems);
        let existingItem = updatedItems.get(sku);
        existingItem = { ...existingItem, quantity: existingItem.quantity - 1 };
        return updatedItems.set(sku, existingItem);
      });
    }
  };

  const removeAll = (sku) => {
    setCartItems((prevItems) => {
      const updatedItems = new Map(prevItems);
      updatedItems.delete(sku);
      return updatedItems;
    });
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
        getItemQuantity,
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
