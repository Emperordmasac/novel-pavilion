import Link from "next/link";
import Image from "next/image";
import hero from "../../public/images/hero.png";
import { siteConfig } from "@/config/site";

import FeatureSection from "@/components/novels/feature-section";
import { listenNowAlbums, madeForYouAlbums } from "@/config/data/albums";
import NovelTable from "@/components/novels/novel-table";

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
        <Image src={hero} width={250} alt="Hero image" priority />
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            What&apos;s going on here?
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            I&apos;m building a novel web app beacuse i got tired of the boring
            ui and how one I&apos;m am presently using seems to be so out of
            date.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="relative inline-flex items-center px-8 py-2 font-medium text-white border border-transparent rounded-md h-11 bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Twitter
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center px-8 py-2 font-medium transition-colors bg-white border rounded-md h-11 border-slate-200 text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            GitHub
          </Link>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-19">
        <FeatureSection title="Popular This Week" albums={listenNowAlbums} />
        <FeatureSection title="New Releases" albums={madeForYouAlbums} />
        <FeatureSection title="Poplular genres" albums={listenNowAlbums} />
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
          Most Recent Update
        </h2>
        <NovelTable />
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            Pavilion is open source and powered by open source software. The
            code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
            <Link href="/docs" className="underline underline-offset-4">
              I&apos;m also documenting everything here
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
