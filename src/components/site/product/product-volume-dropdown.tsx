import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function ProductVolumeDropdown() {
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
          <DropdownMenuRadioItem
            className="hover:bg-slate-100 cursor-pointer small-semibold"
            value="ru"
          >
            1 л
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="hover:bg-slate-100 cursor-pointer small-semibold"
            value="uz"
          >
            19 л
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
