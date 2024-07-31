"use client";

import { YMaps } from "@pbe/react-yandex-maps";

export default function YandexMapsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <YMaps query={{ lang: "ru_RU" }}>{children}</YMaps>;
}
