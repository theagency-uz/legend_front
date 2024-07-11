"use client";

import Image from "next/image";

export default function RootLoading() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-legend">
      <Image
        src="/assets/legend-logo.svg"
        alt="legend logo"
        width={500}
        height={500}
        className="object-cover"
        priority
      />
    </section>
  );
}
