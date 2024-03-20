import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import LearnMore from "@/components/LearnMore";
import MoreRecipes from "@/components/MoreRecipes";
import RecipesList from "@/components/RecipesList";
import SubscribeCard from "@/components/SubscribeCard";

export default function Home() {
  return (
    <>
      <Header />
      <CategoryList />
      <RecipesList />
      <LearnMore />
      <MoreRecipes />
      <SubscribeCard />
    </>
  );
}
