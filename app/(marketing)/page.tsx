import Link from "next/link";
import { siteConfig } from "@/config/site";

import FeatureSection, {
  ContentFulSection,
} from "@/components/novels/feature-section";
import NovelTable from "@/components/novels/novel-table";
import { newNovels, oldNovels } from "@/config/data/novels";

import { client } from "@/lib/contentful/client";

export default async function IndexPage() {
  const data = await await client.getEntries({ content_type: "novel" });

  return (
    <>
      <section className="container grid justify-center gap-6 py-2 md:py-12 lg:py-19">
        <ContentFulSection bigTitle="Most Recent Update" novels={data.items} />
        {/* <FeatureSection title="Popular This Week" novels={newNovels} />
        <FeatureSection title="New Releases" novels={oldNovels} />
        <FeatureSection title="Poplular genres" novels={newNovels} /> */}
        {/* <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
          Most Recent Update
        </h2> */}
        {/* <NovelTable /> */}
      </section>
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Pavilion is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}
