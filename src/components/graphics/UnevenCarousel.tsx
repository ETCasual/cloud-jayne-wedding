/* eslint-disable @next/next/no-img-element */

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { type FunctionComponent } from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

interface CarouselProps {
  images?: string[];
}
export const UnevenCarousel: FunctionComponent<CarouselProps> = ({}) => {
  return (
    <Splide
      className="w-full"
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      extensions={{ AutoScroll }}
      options={{
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: 20,
        type: "loop",
        drag: "free",
        autoScroll: {
          speed: 0.5,
        },
      }}
    >
      <SplideSlide>
        <img
          src="/assets/images/grid-2.webp"
          alt="grid_1"
          className="mt-7 h-60 w-full object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/assets/images/grid-3.webp"
          alt="grid_1"
          className="mt-12 h-60 w-full object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/assets/images/grid-1.webp"
          alt="grid_1"
          className="h-60 w-full object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/assets/images/grid-4.webp"
          alt="grid_1"
          className="mt-12 h-60 w-full object-cover"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="/assets/images/grid-5.webp"
          alt="grid_1"
          className="mt-5 h-60 w-full object-cover"
        />
      </SplideSlide>
    </Splide>
  );
};
