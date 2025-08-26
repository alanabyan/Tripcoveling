import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full px-6 py-16 md:px-12 lg:px-[6.25rem] lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between text-[#040A2C] gap-y-12 lg:gap-x-16">
        <div className="w-full lg:w-[48%] flex flex-col gap-y-6 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-relaxed">
            Eksplorasi Perjalanan{" "}
            <span className="text-[#137BC3]">Destinasi</span> Wisata Terbaik
            Dunia
          </h1>
          <p className="text-base font-medium">
            Kami hadir untuk merekomendasikan lokasi wisata unggulan yang
            memadukan keindahan alam, budaya, dan kenyamanan perjalanan—ideal
            untuk keluarga maupun perjalanan bisnis.
          </p>
          <button className="p-4 w-fit px-8 rounded-full font-medium bg-[#137BC3] text-white hover:bg-blue-700 transition-colors">
            Lihat Rekomendasi Destinasi
          </button>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col gap-y-4 w-full md:w-1/2">
            <div className="w-full h-auto aspect-[4/3] relative">
              <Image
                src={"/assets/images/hero-1.svg"}
                alt="Cityscape destination"
                layout="fill"
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="w-full h-auto aspect-[4/3] relative">
              <Image
                src={"/assets/images/hero-2.svg"}
                alt="Nature destination"
                layout="fill"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="w-full h-auto aspect-[9/16] md:py-32 relative">
               <Image
              src={"/assets/images/hero-3.svg"}
              alt="Historic destination"
              width={256}
              height={455} 
              className="w-full h-auto rounded-2xl object-cover md:w-[556px]"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Catatan: Saya mengganti Image 'width' dan 'height' dengan 'layout="fill"'
// karena ini cara yang lebih modern dan responsif untuk menangani gambar
// dengan Next.js ketika ukurannya ditentukan oleh parent container.
// Pastikan gambar Anda ada di folder /public/assets/images/
