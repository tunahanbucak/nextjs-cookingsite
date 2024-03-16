import { MiniProfileProps } from "@/types";
import React from "react";
import Image from "next/image";

export default function MiniProfile(props: MiniProfileProps) {
  return (
    <div className="flex justify-start items-center gap-5">
      <Image
        src={props.image}
        alt={props.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center items-center ">
        <h3 className="font-bold text-base">{props.name}</h3>
        <p className="text-stone-600 font-medium text-sm">{props.date}</p>
      </div>
    </div>
  );
}
