import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container">
      <h1>Page Not Found</h1>
      <Link href="/" className={buttonVariants({ variant: "ghost" })}>
        Go to home
      </Link>
    </div>
  );
}
