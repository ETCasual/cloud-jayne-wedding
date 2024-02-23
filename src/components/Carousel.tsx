/* eslint-disable @next/next/no-img-element */

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { type FunctionComponent } from "react";

interface CarouselProps {
  images: string[];
}
export const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
  return (
    <Splide
      className="w-full"
      options={{
        rewind: true,
        type: "fade",
        arrows: false,
        autoplay: true,
        interval: 2500,
      }}
    >
      {images.map((src, i) => (
        <SplideSlide key={i}>
          <img
            className="h-96 w-full object-cover object-top xl:h-80"
            src={src}
            alt="Main Image"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
