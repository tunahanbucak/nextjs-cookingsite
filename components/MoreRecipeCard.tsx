'use client';

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Favorite from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { MoreRecipeCardProps } from '@/types';

export default function MoreRecipeCard(props: MoreRecipeCardProps) {
  const [like, setLike] = useState(false);
  return (
    <Card elevation={0} className=" w-72 h-80 relative">
      <Link href={`/recipes/${props.id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title={props.title}
          className="rounded-4xl w-full h-48"
        />
        <IconButton
          className="absolute top-5 right-4 bg-white rounded-full p-2"
          onClick={() => setLike(!like)}>
          <Favorite
            className={`${!like ? 'text-[#DBE2E5]' : 'text-red-400'}`}
          />
        </IconButton>
        <CardContent className="px-0">
          <h6 className="font-semibold text-lg text-black tracking-tight">
            {props.title}
          </h6>
        </CardContent>
        <CardActions sx={{ gap: 4 }}>
          <button className="flex  text-stone-600 font-medium text-sm  justify-between items-center bg-transparent gap-2">
            <Image src="/images/Timer.svg" width={24} height={24} alt="Timer" />
            <span>{props.TimeToReady} dakika</span>
          </button>
          <button className="flex  text-stone-600 font-medium text-sm  justify-evenly items-center bg-transparent gap-2">
            <Image
              src="/images/ForkKnife.svg"
              width={24}
              height={24}
              alt="Fork & Knife"
            />
            <span>{props.Category}</span>
          </button>
        </CardActions>
      </Link>
    </Card>
  );
}
