import Link from "next/link";
import Image from "next/image";

import { NovelGrid } from "@/components/novels/novel-grid";
import { Novel } from "@/config/data/novels";
import { cn } from "@/lib/utils";

import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

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

export function Novel({ novels = [] }: { novels: SanityDocument[] }) {
  const title = novels.length === 1 ? `1 Novel` : `${novels.length} Novels`;

  return (
    <section className="container grid justify-center gap-6 py-8 md:py-3 lg:py-6">
      <div className="flex flex-col gap-4 my-2">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
          {title}
        </h2>
      </div>
      <div className="grid justify-center lg:gap-x-4 gap-x-40 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {novels?.slice(0, 4).map((novel) => (
          <>
            <Link href={novel.slug.current}>
              <div className={cn("space-y-3")}>
                <div className="container overflow-hidden rounded-md">
                  {novel.mainImage && (
                    <Image
                      src={builder
                        .image(novel.mainImage)
                        .width(200)
                        .height(330)
                        .url()}
                      alt={novel.title}
                      width={200}
                      height={330}
                      className={cn(
                        "rounded-md object-cover transition-all hover:scale-105 aspect-[3/4]"
                      )}
                    />
                  )}
                </div>
                <div className="container space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{novel.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {novel.author}
                  </p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
}
