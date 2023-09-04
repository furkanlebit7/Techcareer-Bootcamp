import React from "react";

//Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const LocationCardSlider = ({ location }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {location.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LocationCardSlider;
