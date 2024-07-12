"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { httpClient } from "@/server/request";

export default function useFetchProducts() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);

        const { data: resource } = await httpClient.get(
          `/products/public?${searchParams}`,
          {
            signal: controller.signal,
          }
        );

        await new Promise((resolve) => setTimeout(resolve, 500));

        setData(resource);
      } catch (err) {
        setError("Произошла ошибка...");
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [searchParams]);

  return { data, error, loading };
}
