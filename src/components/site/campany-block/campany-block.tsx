import Image from "next/image";

export default async function CampanyBlock() {
  return (
    <section>
      <Image
        src="/assets/campany.png"
        width={1200}
        height={362}
        alt="капля падает в море"
        className="w-[100vw] h-auto aspect-custom1"
      />
    </section>
  );
}
