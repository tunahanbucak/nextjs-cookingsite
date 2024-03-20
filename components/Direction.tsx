import Image from "next/image";
import { Grid } from "@mui/material";
import Checkbox from "./Checkbox";
import { DirectionProps } from "@/types";

export default function Direction(props: DirectionProps) {
  return (
    <Grid container rowGap={8}>
      <Grid item xs={12}>
        <h3 className="py-14">Directions</h3>
        <Grid container>
          {props.directions.map((direction, index) => (
            <Grid
              container
              className="py-8 flex justify-start gap-10 items-center border-b border-stone-200 "
              key={index}>
              <Checkbox label={direction.title} />
              <p className="text-left">{direction.direction}</p>
              {direction.image && (
                <Image
                  src={direction.image}
                  alt={direction.title}
                  width={800}
                  height={100}
                  className="rounded-[20px]"
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
