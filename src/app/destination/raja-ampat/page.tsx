import { popularDestinations } from "@/data/DestinationData";
import Image from "next/image";
import Link from "next/link";

export default function DestinationRajaAmpat() {
  const displayedDestinations = [
    ...popularDestinations,
    ...popularDestinations,
    ...popularDestinations,
    ...popularDestinations,
  ];

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
  return (
    // Section utama dengan padding vertikal yang responsif
    <section className="py-16 lg:px-[6.25rem] md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Efek frame biru dihilangkan, konten sekarang langsung di dalam container */}

        {/* === JUDUL === */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040A2C] leading-tight max-w-4xl mx-auto">
            Nikmati Liburan Anda bersama keluarga di Raja Ampat
          </h1>
        </div>

        {/* === GALERI GAMBAR === */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Gambar Besar di Kiri */}
          <div className="w-full lg:w-3/5">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/assets/images/raja.svg" // GANTI DENGAN GAMBAR ANDA
                alt="Pemandangan utama Gunung Bromo"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          {/* 4 Gambar Kecil di Kanan */}
          <div className="w-full lg:w-2/5 grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/assets/images/bromo.svg"
                alt="Galeri Bromo 1"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/assets/images/raja.svg"
                alt="Galeri Bromo 2"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/assets/images/pulau.svg"
                alt="Galeri Bromo 3"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl">
              <Image
                src="/assets/images/hero-3.svg"
                alt="Galeri Bromo 4"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* === DESKRIPSI & KOTAK PEMESANAN (CTA) === */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Kolom Kiri: Deskripsi */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-2xl text-slate-600 space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla sodales montes
              mattis at. Ullamcorper turpis arcu pulvinar phasellus diam orci
              venenatis et penatibus. Tellus dolor ullamcorper mattis est
              phasellus posuere massa. Egestas egestas faucibus pellentesque sit
              dui sit lacus quis. Vitae interdum rutrum amet aenean.
            </p>
            <p>
              Non odio sed et volutpat tellus arcu odio sed pharetra. Blandit
              elementum porttitor vel sit nisl. Nibh pharetra est egestas est
              at. Ultrices sit turpis quis vestibulum aliquam porta molestie
              pellentesque adipiscing. Diam orci id diam massa sit dictum neque
              nullam. Lorem faucibus urna arcu platea dui in non eget sed.
            </p>
          </div>

          {/* Kolom Kanan: Kotak CTA */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#040A2C] text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full">
              <p className="text-lg">Mulai dari</p>
              <p className="text-5xl font-bold my-2">Rp. 1.5JT</p>
              <button className="bg-white text-blue-600 font-bold px-10 py-3 rounded-full mt-4 hover:bg-slate-200 transition-colors">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-3xl lg:text-left md:text-4xl text-center">
            Rekomendasi Destinasi Lainnya
          </h1>
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
        </div>
      </div>
    </section>
  );
}
