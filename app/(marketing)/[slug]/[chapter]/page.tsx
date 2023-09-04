import { notFound } from "next/navigation";

import { newNovels, oldNovels } from "@/config/data/novels";
import { ReadingPage } from "@/components/novels/reading-page";

interface PageProps {
  params: {
    chapter: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const allNovels = [...newNovels, ...oldNovels];

  const params = allNovels.reduce((acc, novel) => {
    return [
      ...acc,
      ...novel.chapters.map((chapter) => ({
        chapter: chapter.href,
      })),
    ];
  }, []);

  return params;
}

export default async function PagePage({
  params,
}: {
  params: { chapter: string };
}) {
  const allNovels = [...newNovels, ...oldNovels];

  const chapter = allNovels
    .map((novel) => novel.chapters)
    .flat()
    .find((n) => n.href === params.chapter);

  if (!chapter) {
    notFound();
  }

  return <ReadingPage novel={chapter} />;
}
