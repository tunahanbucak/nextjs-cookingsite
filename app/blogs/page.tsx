import BlogForm from "@/components/BlogForm";
import SubscribeCard from "@/components/SubscribeCard";
import React from "react";
import BlogList from "@/components/BlogList";
import recipes from "../../helper/recipe.json";
import BlogsPosts from "../../helper/blogsPosts.json";

export default function BlogsList() {
  const blogs: any = [];
  BlogsPosts.forEach((blog) => {
    const { id, title, description, image, author } = blog;
    blogs.push({ id, title, description, image, author });
  });
  return (
    <>
      <BlogForm />
      <BlogList blogs={blogs} recipes={recipes} />
      <SubscribeCard />
    </>
  );
}
