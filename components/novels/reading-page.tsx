import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Chapter, Novel } from "@/config/data/novels";
4;
import { Icons } from "@/components/icons";
import { RichText } from "../ui/rich-text";
import { cn } from "@/lib/utils";

interface NovelPageProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Chapter;
}

export function ReadingPage({ chapter, slug }) {
  const { title, content } = chapter.fields;
  const back = slug;

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href={`/${back}`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back to Novel
      </Link>
      <div>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {title}
        </h1>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="prose">
        <RichText content={content} />
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href={`/${back}`}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back to Novel
        </Link>
      </div>
    </article>
  );
}
