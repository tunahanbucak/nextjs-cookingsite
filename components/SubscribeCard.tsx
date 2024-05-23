import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

export default function SubscribeCard() {
  return (
    <Grid
      container
      className="my-16 px-10 md:px-20 mx-auto"
      justifyContent={'center'}>
      <div className="w-full relative overflow-hidden bg-skyblue rounded-6xl flex-col flex items-center justify-center gap-8 px-4 py-20 ">
        <h2 className=" font-semibold text-5xl text-black tracking-tight text-center w-full ">
          Gelen kutunuza gelen lezzetler
        </h2>
        <p className="w-full md:w-1/2 text-stone-600 font-normal text-base text-wrap text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque
          rerum qui, facere odit pariatur. Molestias facilis libero maiores
          quasi.
        </p>
        <form className="relative w-full md:w-[480px] h-20 mt-8">
          <input
            type="text"
            className="rounded-3xl w-full h-full placeholder:text-stone-600 px-4"
            placeholder="E-posta adresiniz..."
          />
          <button className="rounded-2xl  h-[60px] text-white font-medium text-sm flex justify-center items-center gap-5  bg-black absolute top-2 right-2 w-4/12 md:w-[160px]">
            Abone Olun
          </button>
        </form>
        <Image
          src="/images/subscribeSalad.png"
          width={500}
          height={500}
          alt="subsrcibeSalad"
          className="hidden lg:block absolute -bottom-36 -left-36 "
        />
        <Image
          src="/images/subscribePalet.png"
          width={500}
          height={500}
          alt="subscribePalet"
          className="hidden lg:block absolute -bottom-40 -right-40 "
        />
      </div>
    </Grid>
  );
}
