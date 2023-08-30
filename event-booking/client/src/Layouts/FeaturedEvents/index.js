import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import HeaderSliderCard from "../../Components/HeaderSliderCard.js";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import SeeAllButton from "../../Components/SeeAllButton";

const FeaturedEvents = () => {
  return (
    <div className="container mx-auto my-32 px-44">
      <SectionHeader
        title={"Featured Events"}
        description={
          " You can choose to display Featured, Upcoming, Past Events here"
        }
      />
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
      <SeeAllButton text={"All Events"} />
    </div>
  );
};

export default FeaturedEvents;
