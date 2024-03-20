import { CarouselItemProps } from "@/types";
import React, { FC } from "react";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import MiniProfile from "./MiniProfile";
import Link from "next/link";

export default function CarouselItem({ item }: CarouselItemProps) {
  return (
    <Paper
      elevation={0}
      style={{ backgroundImage: `url(${item.image})` }}
      className="relative w-10/12 lg:h-[640px] h-60 bg-no-repeat bg-contain bg-right bg-skyblue m-auto text-white rounded-[50px] p-4 lg:p-14 flex items-center ">
      <div className="flex h-full w-2/5 md:w-1/2 flex-col justify-between items-start gap-10 text-black">
        <button className="bg-white rounded-4xl w-[156px] h-11 text-black font-semibold text-sm hidden  lg:flex justify-evenly items-center ">
          <Image
            src="/images/letter.png"
            width={24}
            height={24}
            alt="hot recipes"
          />
          <span>Sıcak Yemek Tarifleri</span>
        </button>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-3xl lg:text-5xl xl:text-[64px] font-semibold  ">
            <Link href="/recipes">{item.title}</Link>
          </h1>
          <p className="text-stone-600 font-normal text-base text-wrap text-left hidden lg:block ">
            {item.desc.slice(0, 150)}
          </p>
          <div className="flex justify-between items-center gap-5">
            <button className="hidden md:flex rounded-4xl w-36 h-10 text-stone-600 font-medium text-sm  justify-evenly items-center bg-opacity-5 bg-black ">
              <Image
                src="/images/Timer.svg"
                width={24}
                height={24}
                alt="Timer"
              />
              {item.time}
            </button>
            <button className="hidden md:flex rounded-4xl w-[120px] h-10 text-stone-600 font-medium text-sm justify-evenly items-center bg-opacity-5 bg-black">
              <Image
                src="/images/ForkKnife.svg"
                width={24}
                height={24}
                alt="Fork & Knife"
              />
              {item.type}
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-between w-full">
          <MiniProfile
            name={item.author.name}
            image={item.author.image}
            date={item.author.date}
          />
          <Link
            href="/recipes"
            className="rounded-2xl w-[200px] h-[60px] text-white font-medium text-sm flex justify-center items-center gap-5  bg-black">
            Tarifleri Görüntüle
            <Image
              src="/images/PlayCircle.svg"
              width={24}
              height={24}
              alt="View Recipes"
              className="text-white"
            />
          </Link>
        </div>
      </div>
    </Paper>
  );
}
