import { Novel, newNovels, oldNovels } from "@/config/data/novels";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

interface NovelTableProps extends React.HTMLAttributes<HTMLDivElement> {
  novel: Novel;
}

export default function NovelTable() {
  return (
    <Table>
      <TableBody>
        {newNovels
          ? newNovels.map((novel, i) => (
              <TableRow key={`${i} + 1`}>
                <TableCell className="font-medium">{novel.title}</TableCell>
                <TableCell>{novel.chapter}</TableCell>
                <TableCell>{novel.author}</TableCell>
                <TableCell className="text-right">{novel.time}</TableCell>
              </TableRow>
            ))
          : null}
        {oldNovels
          ? oldNovels.map((novel, i) => (
              <TableRow key={`${i} + 1`}>
                <TableCell className="font-medium">{novel.title}</TableCell>
                <TableCell>{novel.chapter}</TableCell>
                <TableCell>{novel.author}</TableCell>
                <TableCell className="text-right">{novel.time}</TableCell>
              </TableRow>
            ))
          : null}
      </TableBody>
    </Table>
  );
}

export function ChapterTable({ chapters }) {
  return (
    <Table>
      <TableBody>
        {chapters
          ? chapters.map((chapter, i) => (
              <TableRow key={`${i} + 1`}>
                <TableCell className="font-medium">
                  <Link href={chapter.slug.current}> {chapter.title}</Link>
                </TableCell>
              </TableRow>
            ))
          : null}
      </TableBody>
    </Table>
  );
}
