import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxCustom({
  filterVal,
  id,
  name,
}: {
  filterVal: string;
  id: string;
  name: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const createQueryString = (
    name: string,
    value: string,
    isChecked: string | boolean
  ) => {
    if (params.get(name) === null) {
      params.set(name, value);
    } else {
      const newFilters = params
        .get(name)
        ?.split(",")
        .filter((fv) => fv !== filterVal);

      if (newFilters?.length === 0) {
        params.delete(name);
        return params.toString();
      }

      params.set(
        name,
        `${newFilters?.join(",")}${isChecked ? "," + value : ""}`
      );
    }

    return params.toString();
  };

  return (
    <div className="flex items-center gap-[0.83vw] max-xs:gap-[10px]">
      <Checkbox
        checked={params.get(name)?.includes(filterVal)}
        onCheckedChange={(isChecked) =>
          router.push(
            pathname + "?" + createQueryString(name, filterVal, isChecked),
            {
              scroll: false,
            }
          )
        }
        id={id}
      />
      <label htmlFor={id} className="medium-normal-nospacing">
        {filterVal}
      </label>
    </div>
  );
}
