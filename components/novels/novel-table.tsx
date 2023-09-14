import { Novel, newNovels, oldNovels } from "@/config/data/novels";
import Link from "next/link";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface NovelTableProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Novel;
}

export default function NovelTable({ chapters, novelSlug }) {
  return (
    <Table>
      <TableBody>
        {chapters
          ? chapters.map((ch, i) => (
              <TableRow key={`${i} + 1`}>
                <TableCell className="font-medium">
                  <Link href={`${novelSlug}/${ch.fields.slug}`}>
                    {ch.fields.title}
                  </Link>
                </TableCell>
              </TableRow>
            ))
          : null}
      </TableBody>
    </Table>
  );
}
