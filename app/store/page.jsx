"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import { getProducts } from "@/data/cms/Products";

const Store = () => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
};

export default Store;
