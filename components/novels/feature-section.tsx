import { NovelGrid } from "@/components/novels/novel-grid";

import { Album } from "@/config/data/albums";

interface FeatureSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  albums: Album[];
}

export default function FeatureSection({ title, albums }: FeatureSectionProps) {
  return (
    <section className="container grid justify-center gap-6 py-8 md:py-3 lg:py-6">
      <div className="flex flex-col gap-4 my-2">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
          {title}
        </h2>
      </div>
      <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-4">
        {albums?.slice(0, 4).map((album) => (
          <NovelGrid
            key={album.name}
            album={album}
            className="w-[250px]"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        ))}
      </div>
    </section>
  );
}
