import Link from "next/link";
import Logo from "./components/Logo";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Nav */}
        <nav className="mb-20 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#product" className="hover:text-neutral-900">
              Product
            </a>
            <a href="#research" className="hover:text-neutral-900">
              Research
            </a>
            <a href="/docs" className="hover:text-neutral-900">
              Article
            </a>
            <a
              href="https://blog.bruca.space"
              className="hover:text-neutral-900"
            >
              Blog
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
            beta
          </span>

          <h1 className="mb-4 text-4xl font-medium leading-tight sm:text-5xl">
            A model built for  research is actually on the way
          </h1>

          <p className="mb-6 text-base leading-relaxed text-neutral-600">
            Bruca is an ecosystem of models and datasets built by a diverse team of developers, 
            with a focus on fairness and diversity in AI development,
            as well as building post-AI systems and vertical AI for specialized domains.

          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://ai.bruca.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-blue-600 bg-blue-50 px-5 py-2.5 font-medium text-blue-800"
            >
              Try the editing agent →
            </a>

            <a
              href="#research"
              className="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700"
            >
              Read the research
            </a>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="mb-2 inline-block rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                Community
              </span>
              <h2 className="mb-1 text-lg font-medium">
                A community for AI and language material
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
                Bruca is also a home for people building AI systems and
                open material for languages and academic writing — research
                notes, datasets, and models, published on the blog.
              </p>
            </div>

            <a
              href="https://blog.bruca.space"
              className="shrink-0 rounded-md bg-blue-600 px-5 py-2.5 text-center font-medium text-white transition-colors hover:bg-blue-700"
            >
              Visit the blog →
            </a>
          </div>
        </section>

        {/* Product preview */}
        <div className="relative mb-8">
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-200 via-blue-100 to-transparent opacity-50 blur-lg"
          />

          <section
            id="product"
            className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                <span className="ml-3 text-xs text-neutral-500">
                  draft.docx
                </span>
              </div>

              <span className="flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
                AI editing
              </span>
            </div>

            <div className="p-6">
              <p className="text-base leading-relaxed">
                The results{" "}
                <span className="rounded bg-red-50 px-1 text-red-700 line-through decoration-red-300">
                  indicate that
                </span>{" "}
                <span className="rounded bg-green-50 px-1 text-green-700">
                  suggest
                </span>{" "}
                a significant correlation between the two variables, which{" "}
                <span className="rounded bg-red-50 px-1 text-red-700 line-through decoration-red-300">
                  was not expected by us
                </span>{" "}
                <span className="rounded bg-green-50 px-1 text-green-700">
                  we did not anticipate
                </span>
                .
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-neutral-500">
              <span>Real edit from Bruca's editing agent</span>
              <a
                href="https://ai.bruca.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                Try it yourself →
              </a>
            </div>
          </section>
        </div>

        {/* Model development space */}
        <section
          id="research"
          className="mb-16 rounded-xl border border-neutral-200 p-6"
        >
          <h2 className="mb-2 text-lg font-medium">
            Model development space
          </h2>

          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
           Where we train and evaluate the models behind Bruca,
            while also developing additional models that can support our ongoing research and help us better understand how professional and AI-generated edits differ in scholarly publications, 
            as well as how academic writers actually engage with AI-assisted language editing. Beyond Bruca, our team is developing models designed to support students and researchers 
            as intelligent assistants throughout their academic work.

          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Model 1 */}
            <a
              href="https://huggingface.co/undertakingroad/AIessaydetectionModel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-neutral-50 p-4 transition-colors hover:bg-neutral-100"
            >
              <p className="mb-1 text-xs text-neutral-500">
                Model
              </p>

              <p className="font-medium">
                AI WQ Detection Model →
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Hugging Face
              </p>
            </a>

            {/* Model 2 */}
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="mb-1 text-xs text-neutral-500">
                Model
              </p>

              <p className="font-medium">
                WorkWellQ Model
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Coming soon
              </p>
            </div>

            {/* Model 3 */}
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="mb-1 text-xs text-neutral-500">
                Model
              </p>

              <p className="font-medium">
                DEI-Model
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-500">
          <span>© 2026</span>

          <Link
            href="/terms"
            className="hover:text-neutral-800"
          >
            Terms of service
          </Link>
        </footer>
      </div>

      <CookieBanner />
    </main>
  );
}
