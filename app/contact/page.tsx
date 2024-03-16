import React from "react";
import Recipes from "../../helper/recipe.json";
import SubscribeCard from "@/components/SubscribeCard";
import ContactUs from "@/components/ContactUs";
import RecommendationRecipe from "@/components/RecommendationRecipe";

export default function Contact() {
  const items = Recipes.filter((item) => item.Top !== 1).slice(0, 4);
  return (
    <>
      <ContactUs />
      {/* <SubscribeCard /> 
      <RecommendationRecipe recipes={items} title="Lezzetli tarife göz atın" />*/}
    </>
  );
}
