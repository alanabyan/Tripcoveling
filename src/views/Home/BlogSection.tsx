import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M23 11H2M23 11L14 2M23 11L14 20"
      stroke="#040A2C"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function BlogSection() {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">
      {/* === HEADER SEKSI (Dibuat Responsif) === */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#040A2C] leading-tight">
            Blog mengenai perjalanan
          </h2>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start gap-y-5">
          <p className="font-medium text-lg text-slate-600 text-center lg:text-left">
            Setiap angka adalah cerita, setiap perjalanan adalah kenangan. Kami
            telah menemani lebih dari 2000 jiwa menjelajahi destinasi indah
            selama dua dekade. Bersama kami, setiap langkah adalah bagian dari
            kisah yang tak terlupakan.
          </p>
          <button className="bg-[#137BC3] px-6 py-3 w-fit rounded-full font-semibold text-white hover:bg-blue-700 transition-colors">
            Lihat lebih banyak
          </button>
        </div>
      </div>

      {/* === BARIS KARTU (Dibuat Responsif) === */}
      {/* 'flex-col' untuk menumpuk kartu di mobile, 'md:flex-row' untuk menyusun horizontal di tablet ke atas */}
      {/* 'gap-8' untuk spasi yang konsisten, menggantikan 'ml-32' dan 'ml-8' */}
      <div className="flex flex-col md:flex-row items-stretch mt-16 gap-8">
        {/* KARTU 1 (Besar) */}
        <Link
          href="#"
          className="group w-full md:w-1/2 border border-slate-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div>
            <Image
              src="/assets/images/raja.svg"
              alt="Raja Ampat destinasi yang paling dicari"
              width={800}
              height={450}
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="flex justify-between items-center p-4">
              <p className="font-semibold text-base text-[#040A2C]">
                Raja Ampat destinasi yang paling dicari
              </p>
              <ArrowIcon />
            </div>
          </div>
        </Link>

        {/* KARTU 2 (Kecil) */}
        <Link
          href="#"
          className="group w-full md:w-1/4 border border-slate-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* 'flex-col h-full' membuat kartu ini mengisi tinggi baris */}
          <div className="flex flex-col h-full">
            {/* 'flex-grow' membuat gambar mengisi ruang kosong yang tersedia */}
            <div className="relative w-full flex-grow">
              <Image
                src="/assets/images/pulau.svg"
                alt="Kepulauan Seribu destinasi yang paling dicari"
                layout="fill"
                className="object-cover"
              />
            </div>
            {/* 'mt-auto' mendorong teks ke bawah */}
            <div className="flex justify-between items-center p-4 mt-auto">
              <p className="font-semibold text-base text-[#040A2C]">
                Kepulauan Seribu
              </p>
              <ArrowIcon />
            </div>
          </div>
        </Link>

        {/* KARTU 3 (Kecil) */}
        <Link
          href="#"
          className="group w-full md:w-1/4 border border-slate-200 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="flex flex-col h-full">
            <div className="relative w-full flex-grow">
              <Image
                src="/assets/images/mount.svg"
                alt="Gunung Bromo destinasi yang paling dicari"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-center p-4 mt-auto">
              <p className="font-semibold text-base text-[#040A2C]">
                Gunung Bromo
              </p>
              <ArrowIcon />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
