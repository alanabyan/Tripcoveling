"use client"; // Diperlukan untuk menggunakan hooks seperti useState dan useEffect

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  // State untuk mengontrol menu mobile (terbuka/tertutup)
  const [isOpen, setIsOpen] = useState(false);
  // State untuk melacak posisi scroll
  const [scrolled, setScrolled] = useState(false);

  // useEffect untuk menambahkan event listener saat scroll
  useEffect(() => {
    const handleScroll = () => {
      // Jika posisi scroll lebih dari 10px, set scrolled menjadi true
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Tambahkan transisi dan ubah background berdasarkan state 'scrolled'
    <nav
      className={`w-full fixed z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex px-6 md:px-12 lg:px-24 py-4 items-center justify-between">
        {/* === Logo === */}
        <h1 className="font-semibold text-lg text-[#040A2C]">
          <span className="text-[#137BC3]">Trip</span>coveling
        </h1>

        {/* === Menu untuk Desktop (Tampil di layar 'lg' ke atas) === */}
        <div className="hidden lg:flex items-center gap-x-10">
          <ul className="flex items-center justify-center font-medium text-lg gap-x-10 text-[#040A2C]">
            <li>
              <Link href={"/"} className="hover:text-[#137BC3]">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-[#137BC3]">
                About
              </Link>
            </li>
            <li>
              <Link href={"/destination"} className="hover:text-[#137BC3]">
                Destination
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-[#137BC3]">
                Blog
              </Link>
            </li>
          </ul>
          <button className="bg-[#137BC3] text-white font-semibold text-lg px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>

        {/* === Tombol Hamburger (Hanya tampil di layar kecil) === */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#040A2C]"
            aria-label="Toggle menu"
          >
            {/* Menggunakan SVG langsung, bukan komponen dari library */}
            {isOpen ? (
              // Ikon 'X' (Close)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ikon 'Hamburger' (Menu)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* === Menu untuk Mobile (Tampil/Sembunyi berdasarkan state 'isOpen') === */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white`}
      >
        <ul className="flex flex-col items-center justify-center font-medium text-lg gap-y-6 text-[#040A2C] pt-4 pb-8">
          <li>
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/destination"} onClick={() => setIsOpen(false)}>
              Destination
            </Link>
          </li>
          <li>
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
        <div className="pb-8 px-6">
          <button className="bg-[#137BC3] text-white font-semibold text-lg w-full py-3 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
