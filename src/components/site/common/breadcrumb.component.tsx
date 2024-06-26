import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import { useTranslation } from "@/lib/i18n";

export default async function BreadcrumbCustom({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="uppercase medium-normal-nospacing"
            href="/"
          >
            {t("main")}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className="rotate-[-15deg]" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="uppercase medium-normal-nospacing"
            href={`catalog`}
          >
            {t("catalog")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
