"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { httpClient } from "@/server/request";
import { sleep } from "@/lib/utils";

export default function useFetchCategories() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const { data: resource } = await httpClient.get(
          `/filters?${searchParams}`
        );

        await sleep(1000);

        setData(resource);
      } catch (err) {
        setError("Произошла ошибка...");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error, loading };
}
