import MaritimeBackground from "@/app/components/resource/MaritimeBackground";

type ResourceArticleProps = {
  category: string;
  title: string;
  description: string;
  lastUpdated: string;
  readingTime: string;
  children: React.ReactNode;
};

export default function ResourceArticle({
  category,
  title,
  description,
  lastUpdated,
  readingTime,
  children,
}: ResourceArticleProps) {
  return (
    <main>
      {/* Hero */}

      <section className="bg-blue-900 text-white pt-24 pb-40">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-blue-900 shadow-md">
            {category}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-blue-200">
            <span>📅 Last Updated: {lastUpdated}</span>
            <span>⏱ {readingTime} Read</span>
          </div>
        </div>
      </section>

      {/* Article */}

      <section className="relative -mt-24 pb-24 overflow-hidden">
        <MaritimeBackground />

        <div className="relative max-w-5xl mx-auto px-6">
          <article className="rounded-3xl border border-gray-100 bg-white p-10 shadow-xl md:p-14">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-blue-900 prose-p:leading-8 prose-p:text-gray-700">
              {children}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}