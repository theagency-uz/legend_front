"use client";

import { useEffect, useRef, useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

import { httpClient } from "@/server/request";

export default function useFetchProducts() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  let controllerRef = useRef(new AbortController());

  useEffect(() => {
    async function fetchData(params?: ReadonlyURLSearchParams) {
      try {
        setLoading(true);

        const url = params
          ? `/products/public?${params.toString()}`
          : `/products/public`;

        if (params) {
          controllerRef.current.abort();
        }

        controllerRef.current = new AbortController();

        const { data } = await httpClient.get(url, {
          signal: controllerRef.current.signal,
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setData(data);
      } catch (err) {
        setError("Произошла ошибка...");
      } finally {
        setLoading(false);
      }
    }

    if (searchParams.toString().length === 0) {
      fetchData();
    } else {
      fetchData(searchParams);
    }

    return () => controllerRef.current.abort();
  }, [searchParams]);

  return { data, error, loading };
}
