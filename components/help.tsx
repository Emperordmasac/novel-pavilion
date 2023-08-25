"use client";

import { Popover } from "@/components/ui/popover";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

import OgImage from "public/og.jpg";
import Image from "next/image";

export function Help() {
  return (
    <Popover>
      <Popover.Trigger className="fixed inline-flex items-center justify-center w-10 h-10 text-white border rounded-full bottom-4 right-4 bg-brand">
        <Icons.pizza className="w-5 h-5" />
        <span className="sr-only">Toggle</span>
      </Popover.Trigger>
      <Popover.Content className="p-4 text-sm text-white bg-brand">
        <div className="grid w-[300px] gap-4">
          <Image
            src={OgImage}
            alt="Screenshot"
            className="overflow-hidden rounded-sm"
          />
          <p>
            This app is a work in progress. I&apos;m building this in public.
          </p>
          <p>
            You can follow the progress on Twitter{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="border-b border-b-white"
            >
              @horlaymilekan
            </a>{" "}
            or on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="border-b border-b-white"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Popover.Content>
    </Popover>
  );
}
