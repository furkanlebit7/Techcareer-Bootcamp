import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import HeaderSliderCard from "../../Components/HeaderSliderCard.js";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import AllEventsButton from "../../Components/AllEventsButton";

const FeaturedEvents = () => {
  return (
    <div>
      <SectionHeader />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeaderSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderCard />
        </SwiperSlide>
      </Swiper>
      <AllEventsButton />
    </div>
  );
};

export default FeaturedEvents;
