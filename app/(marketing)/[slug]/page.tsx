// import { notFound } from "next/navigation";

// import { newNovels, oldNovels } from "@/config/data/novels";
// import { NovelPage } from "@/components/novels/novel-page";
// import { ReadingPage } from "@/components/novels/reading-page";

// interface PageProps {
//   params: {
//     slug: string[];
//   };
// }

// async function getNovelFromParams(params) {
//   const slug = params?.slug?.join("/");
//   let novel = newNovels.find((novel) => novel.href === slug);

//   if (!novel) {
//     novel = oldNovels.find((novel) => novel.href === slug);
//   }

//   return novel || null;
// }

// export async function generateStaticParams(): Promise<PageProps["params"][]> {
//   const newNovelParams = newNovels.map((novel) => ({
//     slug: novel.href.split("/"),
//   }));

//   const oldNovelParams = oldNovels.map((novel) => ({
//     slug: novel.href.split("/"),
//   }));

//   // Combine the parameters from both arrays
//   return newNovelParams.concat(oldNovelParams);
// }

// export default async function PagePage({ params }: PageProps) {
//   // if (params.slug && params.slug.length === 2) {
//   //   const novel = await getNovelChaptersFromParams(params);
//   //   console.log("data", novel);
//   //   return <ReadingPage />;
//   // }

//   const novel = await getNovelFromParams(params);

//   if (!novel) {
//     notFound();
//   }

//   return <NovelPage novel={novel} />;
// }

import { notFound } from "next/navigation";

import { newNovels, oldNovels } from "@/config/data/novels";
import { NovelPage } from "@/components/novels/novel-page";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const allNovels = [...newNovels, ...oldNovels];

  const paramsArray = allNovels.map((novel) => ({
    slug: novel.href.substring(1), // Remove the leading '/'
  }));

  return paramsArray;
}

export default async function PagePage({
  params,
}: {
  params: { slug: string };
}) {
  const novel =
    newNovels.find((novel) => novel.href === `${params.slug}`) ||
    oldNovels.find((novel) => novel.href === `${params.slug}`);

  if (!novel) {
    notFound();
  }

  return <NovelPage novel={novel} />;
}
