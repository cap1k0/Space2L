const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://cms.bruca.space'

export type Author = {
  id: string
  name: string
  affiliation?: string
}

export type Category = {
  id: string
  title: string
  slug: string
}

export type Article = {
  id: string
  title: string
  slug: string
  abstract?: string
  editedText?: unknown
  author: Author[]
  categories?: Category[]
  coverImage?: { url: string; alt?: string }
  publishedDate?: string
  updatedAt: string
}

type ListResponse = {
  docs: Article[]
}

// `next: { revalidate }` is what keeps blog decoupled from cms uptime:
// pages are built once and served from Vercel's cache, only
// re-fetching in the background on the given interval. If cms.bruca.space
// is down when a revalidation fires, Next.js keeps serving the last
// good version instead of failing the request.
const REVALIDATE_SECONDS = 300

export async function getPublishedArticles(): Promise<Article[]> {
  try {
    const res = await fetch(
      `${CMS_URL}/api/articles?where[status][equals]=published&depth=2&limit=100&sort=-publishedDate`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    )

    if (!res.ok) return []

    const data = (await res.json()) as ListResponse
    return data.docs
  } catch {
    // Network-level failure (cms unreachable, DNS, timeout) — fail soft
    // instead of taking the whole blog build down with it.
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${CMS_URL}/api/articles?where[slug][equals]=${encodeURIComponent(slug)}&where[status][equals]=published&depth=2&limit=1`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    )

    if (!res.ok) return null

    const data = (await res.json()) as ListResponse
    return data.docs[0] ?? null
  } catch {
    return null
  }
}
