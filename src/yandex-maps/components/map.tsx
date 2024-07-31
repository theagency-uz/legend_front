"use client";

import { Map, useYMaps, ZoomControl } from "@pbe/react-yandex-maps";

import "./style.css";
import { useEffect, useRef, useState } from "react";

import useDebounce from "@/hooks/useDebounce";

export default function YandexMap({
  mapState,
  setMapState,
}: {
  mapState: any;
  setMapState: any;
}) {
  const ymaps = useYMaps(["Map", "geolocation", "geocode"]);

  const mapOptions = {
    modules: ["geocode", "geolocation"],
    defaultOptions: { suppressMapOpenBlock: true },
    width: "100%",
    height: "600px",
  };

  const [searchText, setSearchText] = useState("");

  const debouncedSearchText = useDebounce(searchText, 500);

  const [searchResults, setSearchResults] = useState([]);

  return (
    <Map className="w-full h-full" state={mapState} {...mapOptions}>
      <ZoomControl options={{ position: { top: "10px", left: "10px" } }} />
    </Map>
  );
}
