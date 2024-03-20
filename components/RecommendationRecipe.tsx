import React from "react";
import Grid from "@mui/material/Grid";
import { RecommendationProps } from "@/types";
import { MoreRecipeCard } from ".";

export default function RecommendationRecipe(props: RecommendationProps) {
  return (
    <Grid
      container
      sx={{ rowGap: 8, justifyContent: "center" }}
      className=" my-16 px-10 md:px-20 mx-auto">
      <h2 className="font-semibold text-5xl text-black tracking-tight">
        {props.title}
      </h2>
      <Grid container>
        {props.recipes.map(({ id, title, image, TimeToReady, Category }) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            key={id}
            className="flex items-center justify-center ">
            <MoreRecipeCard
              id={id}
              title={title}
              image={image}
              TimeToReady={TimeToReady}
              Category={Category}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
