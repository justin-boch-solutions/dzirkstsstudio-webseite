export interface InsightArticle {
  slug: string;
  date: string;
  titleKey: string;
  excerptKey: string;
  bodyKey: string;
}

export const insights: InsightArticle[] = [
  {
    slug: "social-media-lettland",
    date: "2026-06-01",
    titleKey: "insights.a1.title",
    excerptKey: "insights.a1.excerpt",
    bodyKey: "insights.a1.body",
  },
  {
    slug: "elektro-deutschland-lettland",
    date: "2026-06-15",
    titleKey: "insights.a2.title",
    excerptKey: "insights.a2.excerpt",
    bodyKey: "insights.a2.body",
  },
];

export function getInsight(slug: string) {
  return insights.find((a) => a.slug === slug);
}
