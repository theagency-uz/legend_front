import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

import useFetchProductsByVariations from "@/hooks/useFetchProductsByVariation";

export default function ProductVolumeDropdown({
  productId,
}: {
  productId: number;
}) {
  const { data, error, loading } = useFetchProductsByVariations(productId);

  if (loading) {
    return <p>Loading ...</p>;
  }

  const productVars = data;

  console.log(productVars);

  if (productVars) {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit py-[1px] px-[20px] text-primary-300 flex justify-between items-center gap-[15px]">
            <span className="small-semibold tracking-tighter">0.33 л</span>
            <ChevronDown width={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border-white p-2 text-primary-300">
          <DropdownMenuRadioGroup>
            {productVars.map(({ value }) => {
              return (
                <DropdownMenuRadioItem
                  className="hover:bg-slate-100 cursor-pointer small-semibold"
                  value="ru"
                >
                  {value}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
