import { CartProvider } from "@/context/cart.context";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
