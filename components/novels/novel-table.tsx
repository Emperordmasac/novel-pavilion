import { Album, newNovels, oldNovels } from "@/config/data/novels";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface NovelTableProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
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
          ? newNovels.map((novel, i) => (
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
