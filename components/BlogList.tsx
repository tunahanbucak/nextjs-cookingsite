"use client";

import { useState } from "react";
import Grid from "@mui/material/Grid";
import Ads from "./Ads";
import { BlogListProps } from "@/types";
import OtherRecipes from "./OtherRecipes";
import AppPagination from "./Pagination";
import PostCard from "./PostCard";

export default function BlogList(props: BlogListProps) {
  const [blogs, setBlogs] = useState([]);

  return (
    <Grid container rowGap={8} className=" my-16 px-10 md:px-20 mx-auto">
      <Grid item xs={12} lg={8}>
        <Grid container rowGap={6}>
          {blogs.map(({ id, title, image, description, author }) => (
            <Grid
              item
              key={id}
              className="flex items-center justify-start mr-10">
              <PostCard
                id={id}
                title={title}
                image={image}
                description={description}
                author={author}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid
          container
          rowGap={10}
          sx={{ justifyContent: { xs: "center", lg: "left" } }}>
          <Grid item>
            <OtherRecipes
              recipes={props.recipes.slice(0, 3)}
              title="Lezzetli Yemek Tarifleri"
            />
          </Grid>
          <Grid item>
            <Ads />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{ margin: "20px 0px", width: "100%" }}>
        <AppPagination setItems={(blog) => setBlogs(blog)} />
      </Grid>
    </Grid>
  );
}
