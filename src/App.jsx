import React from "react";
import "./index.css";

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/638931dddf47a848a9e6fa5b/1698889560867-UO54R8P7XYGLTYGXBR2U/Death%26Co7-Bar-Restaurant-Denver-Colorado.jpg')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          The Bottled Mixologist 🍸
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Small-batch syrups, natural ingredients, and sustainable indulgence.
        </p>
        <p className="text-md italic text-gray-200">
          Crafted with care — from the shaker to the shelf.
        </p>
      </div>

      <footer className="absolute bottom-6 text-gray-300 text-sm bg-black/30 px-3 py-1 rounded-full">
        © {new Date().getFullYear()} The Bottled Mixologist
      </footer>
    </div>
  );
}
