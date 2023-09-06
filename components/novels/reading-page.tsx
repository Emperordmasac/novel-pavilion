import Link from "next/link";

import { cn } from "@/lib/utils";
import { Chapter, Novel } from "@/config/data/novels";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

interface NovelPageProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Chapter;
}

export function ReadingPage({ novel }) {
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back Home
      </Link>
      <div>
        {novel && (
          <>
            {/* <time
              dateTime={novel.date}
              className="block text-sm text-muted-foreground"
            >
              Published {novel.date}
            </time> */}
            <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
              {novel.title}
            </h1>
          </>
        )}
      </div>
    </article>
  );
}
