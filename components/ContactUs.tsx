"use client";

import { Grid } from "@mui/material";
import Image from "next/image";

export default function ContactUs() {
  const handleSubmit = () => {};
  return (
    <Grid
      container
      className=" my-16 px-10 md:px-20 mx-auto"
      justifyContent={"center"}>
      <h1 className="text-center w-full font-semibold text-[64px] text-black tracking-tight">
        Bize Ulaşın
      </h1>
      <Grid
        item
        xs={12}
        lg={4}
        className="bg-gradient-to-t h-[432px] from-skyblue rounded-4xl relative my-16">
        <Image
          src="/images/Chef.png"
          alt="contact-us"
          width={350}
          height={470}
          className="absolute bottom-0 left-8"
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Grid container>
          <form
            onSubmit={handleSubmit}
            className="lg:ml-10 w-full flex flex-col justify-center items-start gap-8 my-14">
            <Grid
              container
              className="flex flex-col md:flex-row gap-5 flex-nowrap">
              <Grid
                item
                xs={12}
                lg={6}
                className="flex flex-col gap-4 flex-nowrap">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-stone-500">
                  İSİM
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Adınızı giriniz..."
                  className=" bg-white w-full p-4 rounded-2xl border border-stone-300 placeholder:text-sm text-stone-400"
                />
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                className="flex flex-col gap-4 flex-nowrap">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-stone-500">
                  E-POSTA ADRESİ
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="
                  E-posta adresiniz..."
                  className="bg-white w-full p-4 rounded-2xl border border-stone-300 placeholder:text-sm text-stone-400"
                />
              </Grid>
            </Grid>
            <Grid
              container
              className="flex flex-col md:flex-row gap-5 flex-nowrap">
              <Grid
                item
                xs={12}
                lg={6}
                className="flex flex-col gap-4 flex-nowrap">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-stone-500">
                  KONU
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Konuyu girin..."
                  className="bg-white w-full p-4 rounded-2xl border border-stone-300 placeholder:text-sm text-stone-400"
                />
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                className="flex flex-col gap-4 flex-nowrap">
                <label
                  htmlFor="enquiry"
                  className="text-xs font-medium text-stone-500">
                  SORU TÜRÜ
                </label>
                <select
                  name="enquiry"
                  className="bg-white w-full p-4 rounded-2xl border border-stone-300 placeholder:text-sm text-stone-400">
                  <option value="advertising">Reklamcılık</option>
                  <option value="reproof">Kınama</option>
                  <option value="recommendation">Tavsiye</option>
                  <option value="appreciation">Takdir</option>
                </select>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} className="flex flex-col gap-4 flex-nowrap">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-stone-500">
                  MESAJLAR
                </label>
                <textarea
                  name="message"
                  placeholder="Mesajlarınızı girin..."
                  rows={5}
                  className="bg-white w-full p-4 rounded-2xl border border-stone-300 placeholder:text-sm text-stone-400"></textarea>
              </Grid>
            </Grid>
            <button
              type="submit"
              className="rounded-2xl w-[200px] h-[60px] text-white font-medium text-sm flex justify-center items-center gap-5  bg-black  my-10">
              Gönder
            </button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
