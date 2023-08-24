import { novelsData } from "@/config/novels";

interface NovelPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return novelsData.map((novel) => ({
    slug: novel.href.split("/"),
  }));
}

export default async function NovelPage({ params }: NovelPageProps) {
  const slug = params?.slug || "";
  const novel = novelsData.find((novel) => novel.href == slug);

  if (!novel) {
    return <p>no novel</p>;
  }

  return <p>{novel.title}</p>;
}
