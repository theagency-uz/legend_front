"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { httpClient } from "@/server/request";

export default function useFetchCategories() {
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
          `/filters?${searchParams}`,
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
