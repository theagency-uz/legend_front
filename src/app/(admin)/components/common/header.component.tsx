import Link from "next/link";

import {
  Home,
  LayoutTemplate,
  LineChart,
  Package,
  PanelLeft,
  Search,
  ShoppingCart,
  User,
  Users2,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden p-0">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs px-5 pt-5">
          <SheetHeader>
            <SheetTitle>
              <Link
                href="/ru"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-accent text-lg font-semibold text-accent-foreground md:text-base mb-5"
              >
                <LayoutTemplate className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Legend</span>
              </Link>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Дашборд
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Заказы
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <Package className="h-5 w-5" />
              Товары
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Покупатели
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Настройки
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Дашборд</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Товары</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0 flex items-center">
        <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] h-fit"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full p-0"
          >
            <User className="w-[20px] h-[20px]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Аккаунт</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Профиль</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Выйти</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
