"use client";

import { useState } from "react";
import { popularDestinations } from "@/data/DestinationData";
import Image from "next/image";
import Link from "next/link";

const categories = ["Destinasi Populer", "Bali", "Sumatera", "NTT", "Aceh"];

const LocationIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 0C6.35813 0 3 3.35813 3 7.5C3 9.13094 3.53469 10.6275 4.42344 11.8531C4.43938 11.8825 4.44187 11.9153 4.46 11.9434L9.46 19.4434C9.69188 19.7913 10.0825 20 10.5 20C10.9175 20 11.3081 19.7913 11.54 19.4434L16.54 11.9434C16.5584 11.9153 16.5606 11.8825 16.5766 11.8531C17.4653 10.6275 18 9.13094 18 7.5C18 3.35813 14.6419 0 10.5 0ZM10.5 10C9.11937 10 8 8.88062 8 7.5C8 6.11937 9.11937 5 10.5 5C11.8806 5 13 6.11937 13 7.5C13 8.88062 11.8806 10 10.5 10Z"
      fill="#137BC3"
    />
  </svg>
);

export default function Destination() {
  const [activeCategory, setActiveCategory] = useState("Destinasi Populer");

  // Data digandakan
  const displayedDestinations = [
    ...popularDestinations,
    ...popularDestinations,
    ...popularDestinations,
    ...popularDestinations,
  ];

  return (
    // Menggunakan 'container mx-auto' untuk padding yang responsif
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col items-center gap-y-4 text-center">
        {/* Ukuran font dibuat responsif */}
        <h1 className="font-bold text-4xl md:text-5xl text-[#040A2C]">
          Explore petualanganmu
        </h1>
        <p className="font-semibold text-slate-600">
          Kami Hadir untuk Membantu Perjalananmu
        </p>
      </div>

      {/* Filter Kategori dibuat bisa scroll horizontal di mobile */}
      <div className="w-full overflow-x-auto whitespace-nowrap pt-10 pb-2">
        <div className="flex w-max mx-auto items-center justify-center gap-x-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
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

      {/* Grid Destinasi (Strukturnya sudah responsif) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* PERBAIKAN PENTING: Menggunakan 'index' sebagai key karena ID berulang */}
        {displayedDestinations.map((destination, index) => (
          <Link href={destination.href} key={index} className="group">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={destination.srcImg}
                alt={destination.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-start mt-4">
              <div>
                <h3 className="text-xl font-bold text-[#040A2C]">
                  {destination.title}
                </h3>
                <div className="flex items-center gap-x-2 mt-1">
                  <LocationIcon />
                  <p className="text-sm text-slate-600">
                    {destination.location}
                  </p>
                </div>
              </div>
              <p className="text-lg font-bold text-[#040A2C] whitespace-nowrap">
                {destination.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
