"use client"; // Komponen ini interaktif, jadi kita gunakan "use client"

import { useState } from "react";

// Data untuk kategori, bisa Anda sesuaikan atau ambil dari API
const categories = [
  "Destinasi Populer",
  "Bali",
  "Sumatera",
  "NTT",
  "Aceh",
  "Jawa",
  "Kalimantan",
];

export default function CategoryFilter() {
  // State untuk melacak kategori yang sedang aktif
  const [activeCategory, setActiveCategory] = useState("Destinasi Populer");

  return (
    <section className="mt-14">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-auto overflow-x-auto whitespace-nowrap pb-2">
            <div className="flex items-center gap-x-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-[10px] font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? "bg-[#040A2C] text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
            <button className="bg-[#137BC3] text-white font-semibold w-full md:w-auto px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Lihat destinasi lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
