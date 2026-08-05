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
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-blue-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6">

          <span className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full mb-6">

            {category}

          </span>

          <h1 className="text-5xl font-extrabold leading-tight">

            {title}

          </h1>

          <p className="mt-6 text-xl leading-8 text-blue-100">

            {description}

          </p>

          <div className="flex gap-6 mt-10 text-blue-200 text-sm">

            <span>
              Last Updated: {lastUpdated}
            </span>

            <span>
              Reading Time: {readingTime}
            </span>

          </div>

        </div>

      </section>

      {/* Article */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 prose prose-lg max-w-none">

          {children}

        </div>

      </section>

    </main>
  );
}