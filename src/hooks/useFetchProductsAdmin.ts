"use client";

import { useEffect, useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

import { httpClient } from "@/server/request";

import { sleep } from "@/lib/utils";
import { IProductRow } from "@/types/admin/product-row";

export default function useFetchProductsAdmin() {
  const [data, setData] = useState<IProductRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData(params?: ReadonlyURLSearchParams) {
      try {
        setLoading(true);

        const url = params ? `/products?${params.toString()}` : `/products`;

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

    if (searchParams.toString().length === 0) {
      fetchData();
    } else {
      fetchData(searchParams);
    }
  }, [searchParams]);

  return { data, error, loading };
}
