import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxCustom({
  filterVal,
  id,
}: {
  filterVal: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-[0.83vw] max-xs:gap-[10px]">
      <Checkbox id={id} />
      <label htmlFor={id} className="medium-normal-nospacing">
        {filterVal}
      </label>
    </div>
  );
}
