import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Chapter, Novel } from "@/config/data/novels";
4;
import { Icons } from "@/components/icons";
import { RichText } from "../ui/rich-text";
import { cn } from "@/lib/utils";
import { Pager } from "../pager";

interface NovelPageProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Chapter;
}

export function ReadingPage({ chapter, slug, novel }) {
  const { title, content } = chapter.fields;
  const back = slug;

  console.log("novels-->", novel.title);

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
      <div className="prose dark:prose-invert">
        <RichText content={content} />
      </div>
      <hr className="my-4 md:my-6" />
      <Pager />
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
