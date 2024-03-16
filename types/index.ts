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
