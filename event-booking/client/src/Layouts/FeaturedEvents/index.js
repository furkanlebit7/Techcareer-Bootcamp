import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import HeaderSliderCard from "../../Components/HeaderSliderCard.js";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import SeeAllButton from "../../Components/SeeAllButton";

const FeaturedEvents = ({ events }) => {
  return (
    <div className="container mx-auto px-5 md:px-0 my-32 ">
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1000: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
          1400: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={50}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {events &&
          events.data.slice(0, 12).map((event) => (
            <SwiperSlide>
              <HeaderSliderCard event={event} />
            </SwiperSlide>
          ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
      <SeeAllButton text={"All Events"} />
    </div>
  );
};

export default FeaturedEvents;
