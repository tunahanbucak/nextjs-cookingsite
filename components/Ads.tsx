import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface IAdProps {}

export default function Ads(props: IAdProps) {
  return (
    <Link href="/recipes/4">
      <Image src="/images/Ads.png" width={400} height={434} alt="Ads" />
    </Link>
  );
}
