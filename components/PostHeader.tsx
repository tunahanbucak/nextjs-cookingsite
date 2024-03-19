import { PostHeaderProps } from "@/types";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function PostHeader(props: PostHeaderProps) {
  return (
    <Grid
      container
      rowGap={5}
      justifyContent={"center"}
      className="my-16 mx-auto px-10 md:px-20">
      <h1 className="w-full text-center">{props.title}</h1>
      <Grid
        container
        gap={2}
        justifyContent={"center"}
        className="xs:w-full lg:w-1/2">
        <Grid
          item
          xs={5}
          className="w-full flex justify-start items-center gap-4 border-e border-e-stone-300">
          <Image src={props.author.image} width={40} height={40} alt="author" />
          <span className="text-base font-bold ">{props.author.name}</span>
        </Grid>
        <Grid item xs={4} className="flex justify-center items-center">
          <span className="font-medium text-sm text-stone-600">
            {props.author.date}
          </span>
        </Grid>
      </Grid>
      <p className=" w-full lg:w-10/12 text-center">{props.description}</p>
      <Grid
        item
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{ margin: "20px 0px", width: "100%" }}>
        <Image
          src={props.image}
          sizes="100vw"
          width={1280}
          height={600}
          alt="blog"
          className="rounded-4xl"
        />
      </Grid>
    </Grid>
  );
}
