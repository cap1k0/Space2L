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
              Docs
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
          <h1 className="mb-4 text-4xl font-medium leading-tight sm:text-5xl">
            Building at the intersection of AI and blockchain
          </h1>

          <p className="mb-6 text-base leading-relaxed text-neutral-600">
            Bruca is where AI and blockchain meet. We are exploring new
            systems, models, and datasets at the intersection of these
            technologies, together with a diverse community of people building
            what comes next.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#research"
              className="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700"
            >
              Join us →
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

        {/* Model development space */}
        <section
          id="research"
          className="mb-16 rounded-xl border border-neutral-200 p-6"
        >
          <h2 className="mb-2 text-lg font-medium">
            Model development space
          </h2>

          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
           Where we develop and evaluate specialized AI models and datasets,
            while exploring the intersection of artificial intelligence and blockchain technology.
            Our work focuses on building proprietary models, developing high-quality datasets, 
            and investigating new ways AI systems can interact with decentralized technologies.
            Beyond our core research, we are also developing practical AI models and infrastructure designed to support researchers,
            students, and organizations through intelligent, data-driven tools.
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
