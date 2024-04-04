import SubscribeCard from "@/components/SubscribeCard";
import Recipes from "../../../helper/recipe.json";
import Recommendation from "@/components//RecommendationRecipe";
import HeaderRecipe from "@/components//HeaderRecipe";
import CookingSteps from "@/components/CookingSteps";

export default function RecipeDetails({
  params,
}: {
  params: { recipeId: string };
}) {
  const newRep = Recipes.filter((rep) => rep.id == +params.recipeId)[0];

  const items = Recipes.filter((item) => item.Top !== 1).slice(0, 4);

  return (
    <>
      <HeaderRecipe
        title={newRep.title}
        author={newRep.author}
        prepTime={newRep.prepTime ?? 0}
        cookTime={newRep.cookTime ?? 0}
        category={newRep.Category}
        video={newRep.video ?? ""}
        image={newRep.image}
        nutritionInfo={newRep.nutritionInfo ?? []}
        description={newRep.desc}
      />
      <CookingSteps
        directions={newRep.directions ?? []}
        recipes={items.slice(0, 3)}
      />
      <SubscribeCard />
    </>
  );
}
