"use client";

import { useEffect, useState } from "react";

import { httpClient } from "@/server/request";

import { sleep } from "@/lib/utils";

export default function useFetchProductsByVariations(productId: number) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const url = `/products/public/variations/${productId}`;

        const { data } = await httpClient.get(url);

        await sleep(500);

        setData(data);
      } catch (err) {
        console.log(err);
        setError("Произошла ошибка...");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [productId]);

  return { data, error, loading };
}
