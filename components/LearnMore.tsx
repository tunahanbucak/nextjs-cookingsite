import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { FC } from "react";

interface ILearnMoreProps {}

export default function LearnMore(props: ILearnMoreProps) {
  return (
    <Grid container rowGap={12} className="m-auto mb-20 mt-48 px-10 md:px-20 ">
      <Grid item xs={12} md={6}>
        <div className="h-full flex flex-col justify-center items-start gap-16 ">
          <h2>Herkes kendi mutfağında şef olabilir</h2>
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="btn">Daha fazla bilgi edin</button>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="bg-gradient-to-t from-skyblue rounded-4xl relative w-full h-52 md:60 md:h-[500px]">
        <Image
          src={"/images/HappyChef.svg"}
          width={660}
          height={600}
          alt="Chef"
          className="absolute bottom-0 -left-10"
        />
      </Grid>
    </Grid>
  );
}
