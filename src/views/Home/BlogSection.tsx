import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 11H2M23 11L14 2M23 11L14 20"
      stroke="#040A2C"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function BlogSection() {
  return (
    <div className="px-[6.25rem] py-12">
      <div className="flex justify-between items-center">
        <div className="font-semibold w-1/3">
          <h1 className=" text-5xl leading-normal">Blog mengenai perjalanan</h1>
        </div>
        <div className="w-1/2 flex flex-col gap-y-5">
          <p className="font-medium text-lg text-justify">
            Setiap angka adalah cerita, setiap perjalanan adalah kenangan. Kami
            telah menemani lebih dari 2000 jiwa menjelajahi destinasi indah
            selama dua dekade. Bersama kami, setiap langkah adalah bagian dari
            kisah yang tak terlupakan.
          </p>
          <button className="bg-[#137BC3] px-5 py-2.5 w-fit rounded-3xl font-semibold text-white">
            Lihat lebih banyak
          </button>
        </div>
      </div>
      <div className="flex items-center mt-16">
        <Link
          href="#"
          className="w-2/5 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden lg:col-span-2"
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
        <Link
          href="#"
          className="w-1/4 h-[19.625rem] ml-32 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden lg:col-span-2"
        >
          <div>
            <Image
              src="/assets/images/pulau.svg"
              alt="Raja Ampat destinasi yang paling dicari"
              width={800}
              height={450}
              className="w-full object-cover"
            />
            <div className="flex justify-between items-center p-5">
              <p className="font-semibold text-base text-[#040A2C]">
                Raja Ampat destinasi yang paling dicari
              </p>
              <ArrowIcon />
            </div>
          </div>
        </Link>
        <Link
          href="#"
          className="w-1/4 h-[19.625rem] ml-8 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden lg:col-span-2"
        >
          <div>
            <Image
              src="/assets/images/mount.svg"
              alt="Raja Ampat destinasi yang paling dicari"
              width={800}
              height={450}
              className="w-full object-cover"
            />
            <div className="flex justify-between items-center px-5">
              <p className="font-semibold text-base text-[#040A2C]">
                Raja Ampat destinasi yang paling dicari
              </p>
              <ArrowIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
