import { Grid } from "@mui/material";
import React from "react";
import Checkbox from "./Checkbox";

export default function Ingredients() {
  return (
    <Grid container rowGap={8}>
      <Grid item xs={12}>
        <h3>Malzemeler</h3>
        <h4 className="pt-10">Ana yemek için</h4>
        {Array.from({ length: 5 }).map((currElement, i) => (
          <div
            className="py-8 mr-10 flex justify-start gap-5 items-center border-b border-stone-200 "
            key={i}>
            <Checkbox label={"Lorem ipsum dolor sit amet"} ingredient />
          </div>
        ))}
      </Grid>
      <Grid item xs={12}>
        <h4>Sos için</h4>
        {Array.from({ length: 3 }).map((currElement, i) => (
          <div
            className="py-8 mr-10 flex justify-start gap-5 items-center border-b border-stone-200 "
            key={i}>
            <Checkbox label={"Lorem ipsum dolor sit amet"} ingredient />
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
