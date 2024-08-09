"use client";

import { useEffect, useState } from "react";

import { httpClient } from "@/server/request";

export default function useFetchProductAdmin({ slug }: { slug: string }) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const { data: resource } = await httpClient.get(`/products/${slug}`);

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
