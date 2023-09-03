import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const LocationImageSlider = ({ location }) => {
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
        className="h-full"
      >
        {location.data.images.map((picture, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              alt="banner"
              className="w-full h-full object-cover rounded-t-md "
              src={picture}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LocationImageSlider;
