import { Grid } from "@mui/material";
import React from "react";
import Ads from "./Ads";
import Ingredients from "./Ingredients";
import Direction from "./Direction";
import OtherRecipes from "./OtherRecipes";
import { CookingStepsProps } from "@/types";

export default function CookingSteps(props: CookingStepsProps) {
  return (
    <Grid
      container
      rowGap={8}
      className="my-16 px-10 md:px-20 mx-auto"
      justifyContent={"center"}>
      <Grid item xs={12} lg={8}>
        <Ingredients />
        <Direction directions={props.directions} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid
          container
          rowGap={10}
          sx={{ justifyContent: { xs: "center", lg: "left" } }}>
          <Grid item>
            <OtherRecipes recipes={props.recipes} title="Other Recipes" />
          </Grid>
          <Grid item>
            <Ads />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
