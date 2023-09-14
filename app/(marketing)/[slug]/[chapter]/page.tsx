import { notFound } from "next/navigation";

import { newNovels, oldNovels } from "@/config/data/novels";
import { ReadingPage } from "@/components/novels/reading-page";

import { client } from "@/lib/contentful/client";

interface PageProps {
  params: {
    chapter: string;
  };
}

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "chapter" });
  const chapterPaths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return chapterPaths;
}

export default async function PagePage({ params }) {
  const { slug, chapter } = params;

  const response = await client.getEntries({
    content_type: "chapter",
    "fields.slug": chapter,
  });

  if (!response?.items?.length) {
    notFound();
  }

  return <ReadingPage slug={slug} chapter={response?.items?.[0]} />;
}

// chapter-2-components-and-props
