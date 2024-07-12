"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { httpClient } from "@/server/request";

export default function useFetchProduct({ slug }: { slug: string }) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);

        const { data: resource } = await httpClient.get(
          `/products/public/${slug}`,
          {
            signal: controller.signal,
          }
        );

        setData(resource);
      } catch (err) {
        setError("Произошла ошибка...");
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, []);

  return { data, error, loading };
}
