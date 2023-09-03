import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Novel } from "@/config/data/novels";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NovelTable from "@/components/novels/novel-table";

interface NovelPageProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Novel;
}

export function NovelPage({ novel }: NovelPageProps) {
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
      <div className="flex flex-col gap-10 md:flex-row">
        {novel && novel.cover && (
          <Image
            src={novel.cover}
            alt={novel.title}
            width={308}
            height={412}
            className="my-8 rounded-md border bg-muted transition-colors"
            priority
          />
        )}
        <div className="mt-0 md:mt-10">
          {novel && novel.time && (
            <time
              dateTime={novel.time}
              className="block text-sm text-muted-foreground"
            >
              Published {novel.time}
            </time>
          )}
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {novel.title}
          </h1>
          {novel && novel.author ? (
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="flex items-center space-x-2 text-sm">
                <Image
                  src="/images/avatars/avatar.png"
                  alt={novel.title}
                  width={42}
                  height={42}
                  className="rounded-full bg-white"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium">{novel.title}</p>
                  <p className="text-[12px] text-muted-foreground">
                    @{novel.chapter}
                  </p>
                </div>
              </Link>
            </div>
          ) : null}

          <div className="mt-20">
            <button type="submit" className={cn(buttonVariants())}>
              Start Reading
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="chapters">Chapters</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            The basis of this novel is a virtual reality game called Satisfy,
            developed by the world&apos;s top genius scientist Lim Cheolho and
            world-class scientists.
          </TabsContent>
          <TabsContent value="chapters">
            <NovelTable />
          </TabsContent>
        </Tabs>
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back Home
        </Link>
      </div>
    </article>
  );
}
