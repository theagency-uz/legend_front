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
  const { data: products } = useFetchProductsAdmin();

  const [filterName, setFilterName] = useQueryState("filter");

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AdminHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue={filterName ?? "all"}>
            <div className="flex items-center justify-between flex-wrap gap-5">
              <TabsList>
                <TabsTrigger
                  onClick={() => {
                    setFilterName("all");
                  }}
                  value="all"
                >
                  Все
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => {
                    setFilterName("active");
                  }}
                  value="active"
                >
                  Активные
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => {
                    setFilterName("draft");
                  }}
                  value="draft"
                >
                  В Черновике
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span>Экспорт</span>
                </Button>
                <Button variant="admin" size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span>Добавить товар</span>
                </Button>
              </div>
            </div>
            <TabsContent value={filterName ?? "all"}>
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Товары</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Фото</span>
                        </TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Статус
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Цена
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Общие продажи
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
                      {products?.map((product: IProductRow) => (
                        <ProductRow key={product.id} product={product} />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Показано <strong>{products.length}</strong> из{" "}
                    <strong>{products.length}</strong> товаров
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
