import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bgImg1 from "../../../assets/bgImg-1.jpg";
import bgImg2 from "../../../assets/bgImg-2.jpg";
import bgImg3 from "../../../assets/bgImg-3.jpg";
import bgImg4 from "../../../assets/pngwing.com (1).png";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const BannerCarousel = () => {
  return (
    <div className="w-1/2 h-full">
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={bgImg4} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src="" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src="https://sportstiger-images.s3.ap-south-1.amazonaws.com/2021/08/PSG-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://tds-images.thedailystar.net/sites/default/files/images/2022/06/10/thumbnail_2.jpg" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default BannerCarousel;
