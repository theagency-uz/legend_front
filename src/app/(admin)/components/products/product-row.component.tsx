import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";

import { MoreHorizontal } from "lucide-react";

import { IProductRow } from "@/types/admin/product-row";

import { formatCost } from "@/lib/utils";
import Link from "next/link";

export default function ProductRow({ product }: { product: IProductRow }) {
  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + product.previewImage}
          width={64}
          height={64}
          alt={product.name["ru"]}
        />
      </TableCell>
      <TableCell className="font-medium">{product.name["ru"]}</TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge variant="outline">
          {product.isHidden ? "В черновике" : "Активный"}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {formatCost(product.price)} сум
      </TableCell>
      <TableCell className="hidden md:table-cell">0</TableCell>
      <TableCell className="hidden md:table-cell">
        {product.createdAt}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={`/admin/products/${product.slug}`}>
                Редактировать
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-red-600">
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
