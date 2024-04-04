import Image from "next/image";
import Link from "next/link";

export default function Ads() {
  return (
    <Link href="/recipes/4">
      <Image src="/images/Ads.png" width={400} height={434} alt="Ads" />
    </Link>
  );
}
