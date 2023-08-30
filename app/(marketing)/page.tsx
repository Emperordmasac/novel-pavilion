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
      <section className="container pt-6 pb-8 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
        <div className="flex w-full flex-col lg:flex-row lg:space-x-[40px]">
          <div className="lg:w-[61.66%] md:mb-[20px]">
            <div className="h-[320px] w-full bg-gray-400 flex flex-shrink-0 text-[#000] rounded-[12px]"></div>
          </div>
          <div className="lg:w-[35%] pt-[8px]">
            <div className="h-[320px] w-full text-[#000]">
              <div className="mb-6 items-center md:mb-8 flex justify-between">
                <h3 className=" text-[#212121]">Announcements</h3>
                <Link href="#">View all</Link>
              </div>
              <div className="mr-[20px]">
                <div className="flex flex-row gap-8 sm:gap-[12px] md:gap-[16px] lg:flex-col lg:gap-0 lg:space-y-[16px]">
                  <section className="h-[72px] w-full rounded-[12px] bg-gray-400 md:h-[87px]"></section>
                </div>
                <div className="flex flex-row gap-8 sm:gap-[12px] md:gap-[16px] lg:flex-col lg:gap-0 lg:space-y-[16px] mt-5">
                  <section className="h-[72px] w-full rounded-[12px] bg-gray-400 md:h-[87px]"></section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-slate-200" />
      <section className="container grid justify-center gap-6 py-2 md:py-12 lg:py-19">
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
