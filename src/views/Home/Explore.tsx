import CategoryFilter from "@/components/DestinationFilter";
import { popularDestinations } from "@/data/DestinationData";
import Image from "next/image";

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

export default function ExploreSection() {
  // Best Practice: Membuat ID unik untuk data yang digandakan agar tidak ada 'duplicate key' error
  const displayedDestinations = popularDestinations.concat(
    popularDestinations.map((dest) => ({
      ...dest,
      id: dest.id + popularDestinations.length, // misal: id 1 menjadi 4, id 2 menjadi 5, dst.
    }))
  );

  return (
    // Menggunakan 'container' dan padding responsif
    <section className="container mx-auto px-6 py-12 lg:py-20">
      {/* Header: Dibuat vertikal di mobile (flex-col) dan horizontal di desktop (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Bagian Kiri: Lebar penuh & rata tengah di mobile */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Explore Petualanganmu
          </h1>
          <p className="text-base text-slate-600 mt-2">
            Kami Hadir untuk Membantu Perjalananmu
          </p>
        </div>
        {/* Bagian Kanan: Lebar penuh di mobile */}
        <div className="w-full lg:w-1/2">
          <p className="font-medium text-lg text-slate-700 text-center lg:text-left">
            Kami percaya bahwa setiap perjalanan dimulai dari satu langkah
            kecil—dan kami ingin jadi bagian dari langkah itu. Dengan pengalaman
            panjang dan tim yang berdedikasi, kami siap membantumu merencanakan
            liburan yang tak hanya menyenangkan, tapi juga penuh makna.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <CategoryFilter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {displayedDestinations.map((destination) => (
          <div key={destination.id} className="group">
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
          </div>
        ))}
      </div>
    </section>
  );
}
