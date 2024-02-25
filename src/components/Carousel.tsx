/* eslint-disable @next/next/no-img-element */

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { type FunctionComponent } from "react";

interface CarouselProps {
  images?: string[];
}
export const Carousel: FunctionComponent<CarouselProps> = ({}) => {
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
      <SplideSlide>
        <img
          className="h-96 w-full object-cover object-top xl:h-80"
          src={"/assets/images/main_img.webp"}
          alt="Main Image"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          className="h-96 w-full object-cover object-top xl:h-80"
          src={"/assets/images/main_img_2.webp"}
          alt="Main Image"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          className="h-96 w-full object-cover object-right-top xl:h-80"
          src={"/assets/images/main_img_3.webp"}
          alt="Main Image"
        />
      </SplideSlide>
    </Splide>
  );
};
