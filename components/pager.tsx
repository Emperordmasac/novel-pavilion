import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Pager({}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href={""} className={cn(buttonVariants({ variant: "ghost" }))}>
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Prev
      </Link>

      <Link
        href={""}
        className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
      >
        Next
        <Icons.chevronRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
