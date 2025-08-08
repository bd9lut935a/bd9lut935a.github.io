import React from "react";

export const Hero = () => (
  <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-20 px-6 text-center">
    <h1 className="text-5xl font-extrabold mb-4">Welcome to Your Store</h1>
    <p className="text-xl max-w-xl mx-auto mb-8">
      Discover our amazing products designed to make your life better.
    </p>
    <button className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
      Shop Now
    </button>
  </section>
);

export const ProductCard = ({ product }) => (
  <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <p className="text-teal-700 font-bold mt-3">${product.price.toFixed(2)}</p>
    </div>
  </div>
);

export const ProductGrid = ({ products }) => (
  <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </section>
);

const features = [
  { icon: "🚚", title: "Fast Shipping", description: "Get your products delivered quickly." },
  { icon: "💳", title: "Secure Payments", description: "Safe and reliable checkout process." },
  { icon: "⭐", title: "Quality Guarantee", description: "Top quality products you can trust." },
];

export const Features = () => (
  <section className="bg-gray-50 py-16 px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {features.map(({ icon, title, description }) => (
        <div key={title} className="p-6 border rounded-lg shadow-sm">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-teal-700 text-white py-8 px-6 text-center">
    <p>© {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
    <div className="mt-4 space-x-4">
      <a href="#" className="hover:underline">
        Facebook
      </a>
      <a href="#" className="hover:underline">
        Twitter
      </a>
      <a href="#" className="hover:underline">
        Instagram
      </a>
    </div>
  </footer>
);

