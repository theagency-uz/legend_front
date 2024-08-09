"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import AdminHeader from "@/app/(admin)/components/common/header.component";

import useFetchProductAdmin from "@/hooks/useFetchProductAdmin";

import { IProduct } from "@/types/product";

export default function EditProduct({
  params: { productSlug },
}: {
  params: { productSlug: string };
}) {
  const { data, loading } = useFetchProductAdmin({ slug: productSlug });

  const product: IProduct = data?.product;
  const filters = data?.filters;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AdminHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[90rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="h-7 w-7 p-0"
              >
                <Link href="/admin/products">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Назад</span>
                </Link>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                {product?.name?.ru}
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                {product?.isHidden ? "В черновике" : "Активный"}
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button size="sm">Сохранить</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Детали товара</CardTitle>
                    <CardDescription>
                      Вы можете изменить название товара
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Название - ru</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue={product?.name?.ru}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Название - uz</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue={product?.name?.uz}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Цена (сум)</Label>
                        <Input
                          id="name"
                          type="number"
                          className="w-full"
                          defaultValue={product?.price}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Категории</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="type">Тип</Label>
                        <Select>
                          <SelectTrigger id="type" aria-label="Select type">
                            <SelectValue placeholder="Выбрать тип" />
                          </SelectTrigger>
                          <SelectContent>
                            {filters?.types?.map?.((type: any) => {
                              return (
                                <SelectItem value={type?.slug}>
                                  {type?.name?.ru}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="variation">Литраж</Label>
                        <Select>
                          <SelectTrigger
                            id="variation"
                            aria-label="Select variation"
                          >
                            <SelectValue placeholder="Выбрать литраж" />
                          </SelectTrigger>
                          <SelectContent>
                            {filters?.variations?.map?.((variation: any) => {
                              return (
                                <SelectItem value={variation?.slug}>
                                  {variation?.slug}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="category">Категория</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Выбрать категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            {filters?.categories?.map?.((category: any) => {
                              return (
                                <SelectItem value={category?.slug}>
                                  {category?.name?.ru}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Код товара</CardTitle>
                    <CardDescription>Введите код товара</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Код товара</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue={product?.code}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Код упаковки</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue={product?.packageCode}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Статус Товара</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Select
                          defaultValue={
                            product?.isHidden ? "draft" : "published"
                          }
                        >
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Выбрать статус" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">В черновике</SelectItem>
                            <SelectItem value="published">Активный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Картинки товара</CardTitle>
                    <CardDescription>Загрузите картинки</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-10">
                      <button>
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-contain"
                          width={1000}
                          height={1000}
                          src={
                            process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL +
                            product?.previewImage
                          }
                        />
                      </button>
                      <div className="grid grid-cols-3 gap-2">
                        {product?.images?.map?.((url) => {
                          return (
                            <button>
                              <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-contain"
                                height={1000}
                                width={1000}
                                src={
                                  process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + url
                                }
                              />
                            </button>
                          );
                        })}
                        <Label
                          htmlFor="upload"
                          className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                        >
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                        </Label>
                        <Input
                          id="upload"
                          type="file"
                          className="w-0 h-0 hidden"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
