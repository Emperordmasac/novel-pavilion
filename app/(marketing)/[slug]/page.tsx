import { notFound } from "next/navigation";
import { NovelPage } from "@/components/novels/novel-page";

import { client } from "@/lib/contentful/client";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "novel" });
  const novelPaths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return novelPaths;
}

export default async function PagePage({ params }) {
  const { slug } = params;
  const response = await client.getEntries({
    content_type: "novel",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    notFound();
  }

  return <NovelPage novel={response?.items?.[0]} />;
}
