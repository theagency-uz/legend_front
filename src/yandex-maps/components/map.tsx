"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Map, useYMaps, ZoomControl } from "@pbe/react-yandex-maps";
import { debounce } from "lodash";

import "./style.css";

import useDebounce from "@/hooks/useDebounce";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTranslation } from "@/lib/i18n/client";

import { Language } from "@/types/language";

export default function YandexMap({
  lang,
  mapAddress,
  setMapAddress,
}: {
  lang: keyof Language;
  mapAddress: string;
  setMapAddress: Dispatch<SetStateAction<string>>;
}) {
  const { t } = useTranslation(lang);

  const initialMapState = {
    title: "",
    center: [41.311151, 69.279737],
    zoom: 12,
  };

  const [mapState, setMapState] = useState({ ...initialMapState });

  const ymaps = useYMaps(["Map", "geolocation", "geocode"]);

  const mapOptions = {
    modules: ["geocode", "geolocation"],
    defaultOptions: { suppressMapOpenBlock: true },

    width: "100%",
    height: "600px",
  };

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [boundsChanging, setBoundsChanging] = useState(false);
  const debouncedSearchText = useDebounce(searchText, 500);

  function handleChangeLocation(sr: any) {
    setMapState({
      zoom: 18,
      title: `${sr.mainAddress}, ${sr.address}`,
      center: sr.coordinates,
    });
  }

  function handleConfirmAddress() {
    setMapAddress(mapState.title);
  }

  useEffect(() => {
    async function findSuggestions() {
      if (
        ymaps &&
        debouncedSearchText &&
        debouncedSearchText !== mapState?.title
      ) {
        let result: any = await ymaps.geocode(debouncedSearchText, {
          boundedBy: [
            [37.230021044534496, 55.42658662207034],
            [46.10774181813443, 73.35627412207035],
          ],
          strictBounds: true,
          results: 10,
          json: true,
        });

        const tempSearchResults =
          result.GeoObjectCollection?.featureMember?.map((loc: any) => {
            return {
              coordinates: loc.GeoObject.Point.pos.split(" ").reverse(),
              mainAddress:
                loc.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails
                  .Country.CountryName,
              address:
                loc.GeoObject.metaDataProperty?.GeocoderMetaData?.AddressDetails
                  .Country.AddressLine,
            };
          }) || [];

        setSearchResults(tempSearchResults);
      }
    }

    if (searchText === debouncedSearchText && searchActive) {
      findSuggestions();
    }
  }, [debouncedSearchText, ymaps, mapState, searchActive]);

  const handleBoundsChange = async (e: any) => {
    try {
      const newCoords = e.get("newCenter");
      const oldCoords = e.get("oldCenter");

      if (oldCoords !== newCoords && !boundsChanging) {
        setBoundsChanging(true);

        const res: any = await ymaps?.geocode(newCoords);

        const nearest = res.geoObjects.get(0);
        const foundAddress = nearest.properties.get("text");

        setSearchActive(false);
        setSearchText(foundAddress);

        setMapState((prevState) => {
          return {
            ...prevState,
            title: foundAddress,
          };
        });
        setBoundsChanging(false);
      }
    } catch (error) {
      setBoundsChanging(false);
      console.log("ym error: ", error);
    }
  };

  const handleBoundsChangeDebounced = debounce(handleBoundsChange, 1500);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="rounded-[5px] leading-[130%] flex gap-[15px] items-center w-fit max-w-full"
        >
          <img src="/assets/map.svg" alt="map icon" width={15} height={15} />
          <span className="xsmall-medium text-primary-500 w-full overflow-hidden">
            {mapAddress || t("Указать адрес на карте")}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5">{t("Адрес доставки")}</DialogTitle>
          <DialogDescription asChild>
            <div
              className={`grid items-center gap-1.5 small-normal-nospacing w-full relative`}
            >
              <Input
                id="location"
                name="location"
                placeholder={t("Введите адресс доставки")}
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setSearchActive(true);
                }}
                className="max-sm:h-[35px] placeholder:text-slate-500"
              />
              {searchActive && (
                <ul
                  className="flex flex-col gap-2 w-full absolute bg-white rounded-lg"
                  style={{ top: "100%", zIndex: 15, padding: "12px" }}
                >
                  {searchResults?.map((sr: any, i: number) => (
                    <li
                      onClick={() => handleChangeLocation(sr)}
                      className="cursor-pointer"
                      key={i}
                    >
                      {sr.mainAddress}, {sr.address}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
        <Map
          className="w-full h-full relative"
          state={mapState}
          {...mapOptions}
          onBoundsChange={(e: any) => {
            setMapState((prevState) => {
              return {
                ...prevState,
                center: e.get("newCenter"),
              };
            });

            handleBoundsChangeDebounced(e);
          }}
        >
          <ZoomControl options={{ position: { top: "10px", left: "10px" } }} />
          <button
            type="button"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
          >
            <img
              src="/assets/map.svg"
              alt="map icon"
              width={30}
              height={30}
              className=""
            />
          </button>
        </Map>
        <DialogTrigger asChild>
          <Button
            onClick={() => handleConfirmAddress()}
            type="button"
            variant="map"
          >
            {t("Подтвердить")}
          </Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
}
