import Recipes from "../../../helper/recipe.json";
import Blogs from "../../../helper/blogPosts.json";
import PostHeader from "@/components/PostHeader";
import PostContent from "@/components/PostContent";
import SubscribeCard from "@/components/SubscribeCard";
import Recommendation from "@/components/RecommendationRecipe";

export default function BlogPost({ params }: { params: { postId: string } }) {
  const item = Blogs.filter((item) => item.id == params.postId)[0];

  const recipeItems = Recipes.filter((item) => item.Top !== 1).slice(0, 4);
  return (
    <>
      <PostHeader
        id={item.id}
        title={item.title}
        author={item.author}
        description={item.description}
        image={item.image}
      />
      <PostContent QsnAns={item.QsnAns} />
      <SubscribeCard />
      <Recommendation recipes={recipeItems} title="Lezzetli tarife göz atın" />
    </>
  );
}
