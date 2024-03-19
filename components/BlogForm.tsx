"use client";
import { Grid } from "@mui/material";

export default function BlogForm() {
  const submitHandler = () => {};

  return (
    <Grid container rowGap={5} className=" my-16 px-10 md:px-20 mx-auto">
      <Grid container rowGap={3}>
        <h1 className="w-full text-center">Blog & Makale</h1>
        <p className="w-full text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          ipsa veritatis illum? Dolorem, optio esse.
        </p>
      </Grid>
      <Grid
        item
        sx={{ width: "100%" }}
        className="flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="relative w-full md:w-[700px] h-20 mt-8">
          <input
            type="text"
            className="rounded-3xl border-2 border-stone-100 w-full h-full placeholder:text-stone-500 placeholder:text-sm px-5"
            placeholder="Makale, haber veya tarif arayın..."
          />
          <button className="btn absolute top-2 right-2 w-4/12 sm:w-[160px]">
            Arama
          </button>
        </form>
      </Grid>
    </Grid>
  );
}
