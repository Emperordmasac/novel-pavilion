import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Novel, Chapter } from "@/config/data/novels";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NovelTable from "@/components/novels/novel-table";

interface NovelPageProps extends React.HTMLAttributes<HTMLDivElement> {
  novel?: Novel;
}

export function NovelPage({ novel }) {
  const { title, slug, author, coverImage, chapters, synopsis } = novel.fields;
  const { createdAt } = novel.sys;
  const authorImage = author.fields.picture;

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
        <Image
          src={"https:" + coverImage.fields.file.url}
          alt={`cover image for ${title}`}
          width={308}
          height={412}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
        <div className="mt-0 md:mt-10">
          <time
            dateTime={createdAt}
            className="block text-sm text-muted-foreground"
          >
            Published {createdAt}
          </time>
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {title}
          </h1>

          <div className="mt-4 flex space-x-4">
            <Link href="#" className="flex items-center space-x-2 text-sm">
              <Image
                src={"https:" + authorImage.fields.file.url}
                alt={title}
                width={42}
                height={42}
                className="rounded-full bg-white"
              />
              <div className="flex-1 text-left leading-tight">
                <p className="font-medium">{author.fields.name}</p>
                <p className="text-[12px] text-muted-foreground">
                  @ {chapters.length} chapters
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href={`${slug}/${chapters[0].fields.slug}`}
              className={cn(buttonVariants())}
            >
              Start Reading
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="chapters">Chapters</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="mt-5 prose">
            {synopsis}
          </TabsContent>
          <TabsContent value="chapters">
            <NovelTable chapters={chapters} novelSlug={slug} />
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
