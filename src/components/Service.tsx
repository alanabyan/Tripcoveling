import Image from "next/image";

const serviceList = [
  {
    id: 1,
    logo: "/assets/icons/clock.svg",
    title: "Waktu Fleksibel",
    desc: "Pilih jadwal yang pas buat kamu tanpa liburan gak harus ribet!",
  },
  {
    id: 2,
    logo: "/assets/icons/stickman.svg",
    title: "Pemandu Perjalanan",
    desc: "Mereka bukan hanya penunjuk arah, tapi pendamping di kisahmu.",
  },
  {
    id: 3,
    logo: "/assets/icons/plane.svg",
    title: "Perjalanan Terorganisir",
    desc: "Semua dirancang untuk kenyamanan maksimal.",
  },
];

export default function Service() {
  return (
    // Kontainer utama: Dibuat vertikal di mobile dan horizontal di desktop
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Bagian Teks: Dibuat rata tengah di mobile dan rata kiri di desktop */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="font-bold text-4xl text-[#040A2C] leading-snug">
            Layanan Unggulan Kami <br />
            <span className="text-[#137BC3]">untuk anda</span>
          </h2>
          <p className="text-base text-slate-600 mt-4">
            Kami menyediakan berbagai fitur terbaik untuk memastikan perjalanan
            Anda aman, nyaman, dan tak terlupakan.
          </p>
        </div>

        {/* Kontainer Kartu: Dibuat vertikal di mobile dan horizontal di tablet ke atas */}
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-stretch justify-center gap-6">
          {serviceList.map((item) => (
            // Kartu Individual: Diubah sesuai desain baru
            <div
              className="flex flex-col items-center lg:items-start bg-slate-50 p-8 lg:p-[17.5px] rounded-2xl w-full md:w-1/3"
              key={item.id}
            >
              {/* LINGKARAN IKON: div ini untuk membuat lingkaran di belakang gambar */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-100">
                <Image
                  src={item.logo}
                  width={32}
                  height={32}
                  alt={item.title}
                />
              </div>

              <h3 className="text-xl font-bold text-[#040A2C] mt-6">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
