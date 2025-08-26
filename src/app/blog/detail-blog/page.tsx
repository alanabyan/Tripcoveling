import { currentArticle, sidebarArticles } from "@/data/ArtikelDetailData";
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

export default function ArticleDetail() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Kontainer utama: 2 kolom di desktop, 1 kolom di mobile */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* === KONTEN UTAMA (KIRI) === */}
          <main className="w-full lg:w-8/12 bg-white p-6 md:p-8 rounded-xl border border-slate-200">
            {/* Judul Artikel */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#040A2C] mb-6 leading-tight">
              {currentArticle.title}
            </h1>

            {/* Gambar Hero Artikel */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src={currentArticle.srcImg}
                alt={currentArticle.title}
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Isi Artikel / Body Text */}
            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              {currentArticle.bodyText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </main>

          {/* === SIDEBAR (KANAN) === */}
          <aside className="w-full lg:w-4/12">
            <div className="p-6 bg-white rounded-xl border border-slate-200 sticky top-24">
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
                      <p className="flex-grow font-semibold text-slate-800 text-sm">
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
