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

      <main className="max-w-3xl text-center">
        <p className="mb-4">
          ✨ <strong>Handcrafted</strong> syrups and mixers made from clean,
          pronounceable ingredients.
        </p>
        <p className="mb-4">
          🌿 Sustainably produced and packaged — zero waste where possible.
        </p>
        <p className="mb-4">
          🛒 Order online, bundle with teas or candles, and support small-batch
          artisans.
        </p>
        <p className="mt-8 text-gray-500">
          Follow us on Instagram 📸 @thebottledmixologist
        </p>
      </main>

      <footer className="mt-12 text-gray-400 text-sm">
        © {new Date().getFullYear()} The Bottled Mixologist — Crafted in Kent, WA
      </footer>
    </div>
  );
}
