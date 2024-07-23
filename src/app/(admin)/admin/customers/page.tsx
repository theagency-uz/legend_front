"use client";

import { useQueryState } from "nuqs";

import { File, PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminHeader from "../../components/common/header.component";
import useFetchProductsAdmin from "@/hooks/useFetchProductsAdmin";
import ProductRow from "../../components/products/product-row.component";

import { IProductRow } from "@/types/admin/product-row";

export default function Customers(): JSX.Element {
  //   const { data: products } = useFetchProductsAdmin();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AdminHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span>Экспорт</span>
              </Button>
            </div>
          </div>
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Покупатели</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Имя</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Фамилия
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Номер телефона
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Адрес
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Создан
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Действия</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* {products?.map((product: IProductRow) => (
                        <ProductRow key={product.id} product={product} />
                      ))} */}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Показано <strong>{5}</strong> из <strong>{10}</strong>{" "}
                покупателей
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
