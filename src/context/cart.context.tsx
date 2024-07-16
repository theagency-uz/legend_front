"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";

import { IItemInCart } from "@/types/itemInCart";

interface ICartContext {
  cartItems: IItemInCart[];
  addToCart: (item: IItemInCart) => void;
  removeFromCart: (item: IItemInCart) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getTotalItems: () => number;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<IItemInCart[]>([]);

  const initialRender = useRef(true);

  const addToCart = (item: IItemInCart) => {
    const isItemInCart = cartItems.find(
      (cartItem: IItemInCart) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem: IItemInCart) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: item.quantity }]);
    }
  };

  const removeFromCart = (item: IItemInCart) => {
    const isItemInCart = cartItems.find(
      (cartItem: IItemInCart) => cartItem.id === item.id
    );

    if (isItemInCart?.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem: IItemInCart) => cartItem.id !== item.id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem: IItemInCart) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total: number, item: IItemInCart) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce(
      (total: number, item: IItemInCart) => total + item.quantity,
      0
    );
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = function () {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Use context inside the provider");
  }

  return cartContext;
};
