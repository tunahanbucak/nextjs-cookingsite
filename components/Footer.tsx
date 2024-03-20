"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center mb-24">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-5">
            <Image
              src="/images/Foodieland.png"
              alt="logo"
              width={74}
              height={29}
            />
          </Link>
        </div>
        <div className="border bg-gray-20" />
        <p className="text-[14px] font-[400] w-full text-center text-gray-30">
          2024 Foodieland | Tüm hakları saklıdır
        </p>
      </div>
    </footer>
  );
}
