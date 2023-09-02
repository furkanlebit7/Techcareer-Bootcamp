import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const EventImageSlider = ({ event }) => {
  console.log(event);
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
        {event.data.eventPictures.map((picture, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              alt="banner"
              className="w-full h-full object-cover rounded-t-md "
              src={picture}
            />
          </SwiperSlide>
        ))}

        {event.data.eventTypeId === 1 && (
          <SwiperSlide>
            <img
              loading="lazy"
              alt="banner"
              className="w-full h-full object-cover rounded-t-md"
              src={
                "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fHww&w=1000&q=80"
              }
            />
          </SwiperSlide>
        )}
        {event.data.eventTypeId === 2 && (
          <SwiperSlide>
            <img
              loading="lazy"
              alt="banner"
              className="w-full h-full object-cover rounded-t-md"
              src={
                "https://kultur.istanbul/gorsel/2020/01/tiyatro-festivali-2020-1.jpg"
              }
            />
          </SwiperSlide>
        )}
        {event.data.eventTypeId === 3 && (
          <SwiperSlide>
            <img
              loading="lazy"
              alt="banner"
              className="w-full h-full object-cover rounded-t-md"
              src={
                "https://www.sixt.com.tr/storage/images/shares/haberler/istanbulmodern.jpg"
              }
            />
          </SwiperSlide>
        )}
        {event.data.eventTypeId >= 4 && (
          <SwiperSlide>
            <img
              loading="lazy"
              alt="banner"
              className="w-full h-full object-cover rounded-t-md"
              src={
                "https://blog.biletino.com/file/2022/03/festival-nedir-festival-ne-demek-biletino-blog-235289.jpg"
              }
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default EventImageSlider;
