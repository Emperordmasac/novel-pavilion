import Image from "next/image";

import { cn } from "@/lib/utils";
import { Novel } from "@/config/data/novels";
import Link from "next/link";
import ContentFulImage from "../ui/contentful-image";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Novel;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function NovelGrid({
  novel,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <>
      <Link href={novel.href}>
        <div className={cn("space-y-3", className)} {...props}>
          <div className="container overflow-hidden rounded-md">
            <Image
              src={novel.cover}
              alt={novel.title}
              width={width}
              height={height}
              className={cn(
                "rounded-md object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
          <div className="container space-y-1 text-sm">
            <h3 className="font-medium leading-none">{novel.title}</h3>
            <p className="text-xs text-muted-foreground">{novel.author}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export function NewNovelGrid({
  novel,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}) {
  const { title, slug, author, coverImage } = novel.fields;

  return (
    <>
      <Link href={slug}>
        <div className={cn("space-y-3", className)} {...props}>
          <div className="container overflow-hidden rounded-md">
            <Image
              src={"https:" + coverImage.fields.file.url}
              alt={`cover image for ${title}`}
              width={coverImage.fields.file.details.image.width}
              height={coverImage.fields.file.details.image.height}
              className={cn(
                "rounded-md object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
          <div className="container space-y-1 text-sm">
            <h3 className="font-medium leading-none">{title}</h3>
            <p className="text-xs text-muted-foreground">
              {author.fields.name}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
