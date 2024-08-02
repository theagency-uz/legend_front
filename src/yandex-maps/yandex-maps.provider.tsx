"use client";

import { YMaps } from "@pbe/react-yandex-maps";

export default function YandexMapsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YMaps
      query={{ lang: "ru_RU", apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_KEY }}
    >
      {children}
    </YMaps>
  );
}
