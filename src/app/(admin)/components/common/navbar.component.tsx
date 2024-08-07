import Link from "next/link";

import {
  Home,
  LayoutTemplate,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AdminNavLink from "./nav-link";

export default function AdminNavbar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/ru"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-admin-primary text-lg font-semibold md:h-8 md:w-8 md:text-base text-accent-foreground"
        >
          <LayoutTemplate className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Legend</span>
        </Link>

        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AdminNavLink tooltip={"Дашборд"} href="/admin/dashboard">
                <Home className="h-5 w-5" />
                <span className="sr-only">Дашборд</span>
              </AdminNavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Дашборд</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AdminNavLink tooltip={"Заказы"} href="/admin/orders">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Заказы</span>
              </AdminNavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Заказы</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AdminNavLink tooltip={"Товары"} href="/admin/products">
                <Package className="h-5 w-5" />
                <span className="sr-only">Товары</span>
              </AdminNavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Товары</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AdminNavLink tooltip={"Покупатели"} href="/admin/customers">
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Покупатели</span>
              </AdminNavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Покупатели</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AdminNavLink tooltip={"Аналитика"} href="/admin/analytics">
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Аналитика</span>
              </AdminNavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Аналитика</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider delayDuration={0} skipDelayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AdminNavLink tooltip={"Настройки"} href="/admin/settings">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Настройки</span>
              </AdminNavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Настройки</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
