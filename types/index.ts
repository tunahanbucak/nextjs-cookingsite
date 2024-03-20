import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface CarouselItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    type: string;
    desc: string;
    time: string;
    author: {
      name: string;
      image: string;
      date: string;
    };
  };
}
export interface MiniProfileProps {
  name: string;
  image: string;
  date: string;
}
export interface CategoryItemProps {
  title: string;
  image: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}
export interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  TimeToReady: number;
  Category: string;
}
export interface MoreRecipeCardProps {
  id: number;
  title: string;
  image: string;
  TimeToReady: number;
  Category: string;
}
export interface RecommendationProps {
  title: string;
  recipes: {
    id: number;
    title: string;
    image: string;
    TimeToReady: number;
    Category: string;
  }[];
}
export interface OtherRecipesProps {
  title: string;
  recipes: {
    id: number;
    title: string;
    image: string;
    author: { name: string; image: string; date: string };
  }[];
}
export interface OtherRecipeCardProps {
  id: number;
  title: string;
  image: string;
  author: { name: string; image: string; date: string };
}
export interface BlogListProps {
  blogs: {
    id: number;
    title: string;
    image: string;
    description: string;
    author: { name: string; image: string; date: string };
  }[];
  recipes: {
    id: number;
    title: string;
    image: string;
    author: { name: string; image: string; date: string };
  }[];
}
export interface AppPaginationProps {
  setItems: (blog: any) => void;
}
export interface PostCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  author: { name: string; image: string; date: string };
}
export interface PostContentProps {
  QsnAns: { question: string; answer: string; image: string; quote: string }[];
}
export interface PostHeaderProps {
  id: string;
  title: String;
  author: { name: string; date: string; image: string };
  image: string;
  description: string;
}

export interface CookingStepsProps {
  directions: { title: string; image: string; direction: string }[];
  recipes: {
    id: number;
    title: string;
    image: string;
    TimeToReady: number;
    Category: string;
    author: { name: string; image: string; date: string };
  }[];
}

export interface DirectionProps {
  directions: { title: string; image: string; direction: string }[];
}

export interface CheckboxProps {
  label: string;
  ingredient?: boolean;
}

export interface HeaderRecipeProps {
  title: string;
  author: { name: string; date: string; image: string };
  prepTime: number;
  cookTime: number;
  category: string;
  video: string;
  image: string;
  nutritionInfo: { title: string; amount: string }[];
  description: string;
}
