import Link from "next/link";
import Image from "next/image";
import hero from "../../public/images/hero.png";
import { siteConfig } from "@/config/site";

import FeatureSection from "@/components/novels/feature-section";
import { listenNowAlbums, madeForYouAlbums } from "@/config/data/albums";
import NovelTable from "@/components/novels/novel-table";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";

export default function IndexPage() {
  return (
    <>
      <section className="container grid justify-center gap-6 py-2 md:py-12 lg:py-19">
        <FeatureSection title="Popular This Week" albums={listenNowAlbums} />
        <FeatureSection title="New Releases" albums={madeForYouAlbums} />
        <FeatureSection title="Poplular genres" albums={listenNowAlbums} />
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
          Most Recent Update
        </h2>
        <NovelTable />
      </section>
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
