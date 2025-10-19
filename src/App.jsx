import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">The Bottled Mixologist 🍸</h1>
        <p className="text-lg text-gray-600">
          Small-batch syrups, natural flavors, and eco-friendly ingredients
        </p>
      </header>
<img src="https://cdn.shopify.com/s/files/1/0627/1729/6877/files/logoooborder.png?v=1661262694"></img>
      <main className="max-w-3xl text-center">
        <p className="mb-4">✨ Handcrafted. 🌿 Clean-label. 🚚 Fast shipping.</p>
      </main>
      <footer className="mt-12 text-gray-400 text-sm">
        © {new Date().getFullYear()} The Bottled Mixologist
      </footer>
    </div>
  );
}
