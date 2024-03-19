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
