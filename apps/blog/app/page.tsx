import Link from "next/link";
import Logo from "./components/Logo";
import { getPublishedArticles } from "./lib/cms";

export const revalidate = 300;

async function debugFetch() {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "https://cms.bruca.space";
  const params = new URLSearchParams();
  params.set("where[workflowStatus][equals]", "published");
  params.set("depth", "2");
  params.set("limit", "100");
  params.set("sort", "-publishedDate");
  const url = cmsUrl + "/api/articles?" + params.toString();

  try {
    const res = await fetch(url, { cache: "no-store" });
    const text = await res.text();
    return {
      cmsUrl: cmsUrl,
      url: url,
      status: res.status,
      body: text.slice(0, 800),
    };
  } catch (err) {
    return {
      cmsUrl: cmsUrl,
      url: url,
      status: "threw",
      body: String(err),
    };
  }
}

export default async function BlogIndex() {
  const articles = await getPublishedArticles();
  const debug = await debugFetch();

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <nav className="mb-16 flex items-center justify-between">
          <a href="https://bruca.space">
            <Logo />
          </a>
          <a
            href="https://bruca.space"
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            bruca.space &rarr;
          </a>
        </nav>

        <header className="mb-14">
          <h1 className="mb-2 text-3xl font-medium leading-tight sm:text-4xl">
            Blog
          </h1>
          <p className="text-base text-neutral-600">
            Notes on AI-assisted language editing for academic writing.
          </p>
        </header>

        {articles.length === 0 ? (
          <div>
            <p className="text-neutral-500">No articles published yet.</p>
            <pre className="mt-6 whitespace-pre-wrap break-all rounded-md bg-neutral-100 p-4 text-xs text-neutral-700">
              {JSON.stringify(debug, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="divide-y divide-neutral-200">
            {articles.map((article) => (
              <article key={article.id} className="py-8 first:pt-0">
                <Link
                  href={`/${article.slug}`}
                  className="mb-2 block text-xl font-medium leading-snug hover:text-blue-700"
                >
                  {article.title}
                </Link>
                {article.abstract && (
                  <p className="mb-3 line-clamp-2 text-neutral-600">
                    {article.abstract}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                  {article.author?.length > 0 && (
                    <span>{article.author.map((a) => a.name).join(", ")}</span>
                  )}
                  {article.publishedDate && (
                    <time dateTime={article.publishedDate}>
                      {new Date(article.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  {article.categories?.map((c) => (
                    <span
                      key={c.id}
                      className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-800"
                    >
                      {c.title}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
