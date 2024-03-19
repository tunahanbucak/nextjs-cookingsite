import { OtherRecipesProps } from "@/types";
import { Grid } from "@mui/material";
import React from "react";
import OtherRecipeCard from "./OtherRecipeCard";

export default function OtherRecipes(props: OtherRecipesProps) {
  return (
    <Grid container sx={{ rowGap: 6 }}>
      <h3 className="font-semibold text-3xl text-black"> {props.title} </h3>
      <Grid container rowGap={3}>
        {props.recipes.map(({ id, title, image, author }) => (
          <Grid item key={id} className="flex items-center justify-center ">
            <OtherRecipeCard
              id={id}
              title={title}
              image={image}
              author={author}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
