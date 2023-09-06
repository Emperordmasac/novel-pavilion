import { NovelGrid, NewNovelGrid } from "@/components/novels/novel-grid";
import { Novel } from "@/config/data/novels";

interface FeatureSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  novels: Novel[];
}

export default function FeatureSection({ title, novels }: FeatureSectionProps) {
  return (
    <section className="container grid justify-center gap-6 py-8 md:py-3 lg:py-6">
      <div className="flex flex-col gap-4 my-2">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
          {title}
        </h2>
      </div>
      <div className="grid justify-center lg:gap-x-4 gap-x-40 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {novels?.slice(0, 4).map((novel) => (
          <NovelGrid
            key={novel.title}
            novel={novel}
            className="w-[250px]"
            aspectRatio="portrait"
            width={200}
            height={330}
          />
        ))}
      </div>
    </section>
  );
}

export function ContentFulSection({ bigTitle, novels }) {
  return (
    <section className="container grid justify-center gap-6 py-8 md:py-3 lg:py-6">
      <div className="flex flex-col gap-4 my-2">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
          {bigTitle}
        </h2>
      </div>
      <div className="grid justify-center lg:gap-x-4 gap-x-40 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {novels?.map((novel) => (
          <NewNovelGrid
            key={novel.fields.slug}
            novel={novel}
            className="w-[250px]"
            aspectRatio="portrait"
            width={200}
            height={330}
          />
        ))}
      </div>
    </section>
  );
}
