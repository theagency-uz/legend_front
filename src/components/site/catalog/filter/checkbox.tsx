import { useQueryState } from "nuqs";

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
  const [filterName, setFilterName] = useQueryState(name);

  return (
    <div className="flex items-center gap-[0.83vw] max-xs:gap-[10px]">
      <Checkbox
        checked={filterName === id ?? false}
        onCheckedChange={(isChecked) => {
          isChecked ? setFilterName(id) : setFilterName(null);
        }}
        id={id}
      />
      <label htmlFor={id} className="md:medium-normal-nospacing">
        {filterVal}
      </label>
    </div>
  );
}
