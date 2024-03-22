import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Recipes from "../helper/recipe.json";
import MoreRecipeCard from "./MoreRecipeCard";

export default function MoreRecipes() {
  const newRecipes = Recipes.filter((recipe) => recipe.Top !== 1);

  return (
    <Grid
      sx={{ rowGap: 8, justifyContent: "center" }}
      className="my-16 px-10 md:px-20 mx-auto">
      <Grid item xs={12} lg={6}>
        <h2 className="font-semibold text-5xl text-black tracking-tight pb-10 mb-5 items-center flex justify-center">
          Gününüzü güzelleştirmek için bu lezzetli tarifleri deneyin
        </h2>
      </Grid>
      <Grid
        container
        sx={{ rowGap: 4, justifyContent: "center", width: "100%" }}>
        {newRecipes.map(({ id, title, image, TimeToReady, Category }) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            key={id}
            className="flex items-center justify-center">
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
