import { notFound } from "next/navigation";

import { newNovels, oldNovels } from "@/config/data/novels";
import { NovelPage } from "@/components/novels/novel-page";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getNovelFromParams(params) {
  const slug = params?.slug?.join("/");
  let novel = newNovels.find((novel) => novel.href === slug);

  if (!novel) {
    novel = oldNovels.find((novel) => novel.href === slug);
  }

  return novel || null;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const newNovelParams = newNovels.map((novel) => ({
    slug: novel.href.split("/"),
  }));

  const oldNovelParams = oldNovels.map((novel) => ({
    slug: novel.href.split("/"),
  }));

  // Combine the parameters from both arrays
  return newNovelParams.concat(oldNovelParams);
}

export default async function PagePage({ params }: PageProps) {
  const novel = await getNovelFromParams(params);

  if (!novel) {
    notFound();
  }

  return <NovelPage novel={novel} />;
}
