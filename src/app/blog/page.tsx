import { mainArticles, sidebarArticles } from "@/data/ArtikelData";
import Image from "next/image";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function ArticlePage() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="w-full lg:w-8/12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#040A2C] mb-6">
              Halo sobat{" "}
              <strong className="text-[#137BC3]">tripcoveling</strong>! Yuk, cek
              liburan apa saja untuk bulan ini
            </h1>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src="/assets/images/bromo.svg"
                alt="Hero article image"
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Daftar Artikel Utama */}
            <div className="space-y-8">
              {mainArticles.map((article) => (
                <Link
                  href={article.href}
                  key={article.id}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <div className="w-full sm:w-1/3 flex-shrink-0">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={article.srcImg}
                        alt={article.title}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#040A2C] mb-2">
                      {article.title}
                    </h2>
                    <p className="text-base text-slate-600">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </main>

          {/* === SIDEBAR (KANAN) === */}
          <aside className="w-full lg:w-4/12">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-[#040A2C] mb-6">
                Artikel lainnya
              </h3>
              <div className="space-y-4">
                {sidebarArticles.map((article) => (
                  <Link
                    href={article.href}
                    key={article.id}
                    className="group block"
                  >
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="w-1/4 flex-shrink-0">
                        <div className="relative aspect-square rounded-md overflow-hidden">
                          <Image
                            src={article.srcImg}
                            alt={article.title}
                            layout="fill"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <p className="flex-grow font-semibold text-slate-800">
                        {article.title}
                      </p>
                      <ArrowIcon />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
