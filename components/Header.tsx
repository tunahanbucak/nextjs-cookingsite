"use client";

import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import slider from "../helper/slider.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Items = slider.map((item) => <CarouselItem key={item.id} item={item} />);

export default function Header() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <div className="w-full md:py-10 py-5 m-auto space-x-4">
          <AliceCarousel
            mouseTracking
            items={Items}
            controlsStrategy="responsive"
            infinite={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            keyboardNavigation={true}
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>
      )}
    </>
  );
}
