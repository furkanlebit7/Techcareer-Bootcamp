import React from "react";
import Header from "../../Layouts/Header";
import HeaderSliderCard from "../../Components/HeaderSliderCard.js";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const HomePage = () => {
  return (
    <div className="bg-whiteMain pb-96">
      <Header />
      <div className="container mx-auto my-32 px-44">
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
      </div>
    </div>
  );
};

export default HomePage;
