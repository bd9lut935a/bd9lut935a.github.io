import React from "react";
import { Hero, ProductGrid, Features, Footer } from "./components/LandingSections";
import { products } from "./data/products";

export default function App() {
  return (
    <>
      <Hero />
      <ProductGrid products={products} />
      <Features />
      <Footer />
    </>
  );
}

