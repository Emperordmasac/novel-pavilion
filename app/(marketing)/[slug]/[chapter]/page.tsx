import { notFound } from "next/navigation";

import { newNovels, oldNovels } from "@/config/data/novels";
import { ReadingPage } from "@/components/novels/reading-page";

import { SanityDocument } from "@sanity/client";
import { chapterPathsQuery, chapterQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";

interface PageProps {
  params: {
    chapter: string;
  };
}

// export async function generateStaticParams(): Promise<PageProps["params"][]> {
//   const allNovels = [...newNovels, ...oldNovels];

//   const params = allNovels.reduce((acc, novel) => {
//     return [
//       ...acc,
//       ...novel.chapters.map((chapter) => ({
//         chapter: chapter.href,
//       })),
//     ];
//   }, []);

//   return params;
// }

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const chapters = await client.fetch(chapterPathsQuery);

  return chapters;
}

// export default async function PagePage({
//   params,
// }: {
//   params: { chapter: string };
// }) {
//   const allNovels = [...newNovels, ...oldNovels];

//   const chapter = allNovels
//     .map((novel) => novel.chapters)
//     .flat()
//     .find((n) => n.href === params.chapter);

//   if (!chapter) {
//     notFound();
//   }

//   return <ReadingPage novel={chapter} />;
// }

export default async function Page({ params }: { params: any }) {
  const novel = await sanityFetch<SanityDocument>({
    query: chapterQuery,
    params,
  });

  console.log("chapterPage", novel);

  return <ReadingPage novel={novel} />;
}
