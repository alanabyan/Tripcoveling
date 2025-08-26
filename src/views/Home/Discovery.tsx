import Service from "@/components/Service";
import Image from "next/image";

export default function NewDiscoverySection() {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-[6.25rem]">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-7/12 order-2 lg:order-1 flex justify-center">
          <Image
            src="/assets/images/collage.svg" 
            alt="Kolase berbagai destinasi wisata alam"
            width={600}  
            height={500} 
            className="w-full h-auto max-w-2xl" 
          />
        </div>

        <div className="w-full lg:w-5/12 order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#040A2C] leading-tight">
            Temukan Jejak Baru di Sudut Dunia yang Menakjubkan
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600">
            Kami hadir untuk para penjelajah sejati. Setiap bulan, kami sajikan
            destinasi yang memacu adrenalin dan memanjakan mata. Siap untuk
            pengalaman yang tak biasa dan cerita yang tak terlupakan?
          </p>
        </div>

      </div>
      <Service />
    </section>
  );
}