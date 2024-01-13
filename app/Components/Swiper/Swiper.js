import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './swiper.css'
import 'swiper/css/navigation';

const Slider = ({slides}) => {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        slidesPerView={3}
        // navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        // pagination={{clickable: true,}}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map( (slide,ind) => (
            <SwiperSlide key={ind}>
                <img className='slider-image' src={slide.image} alt={slide.title}/>
            </SwiperSlide>
        ) )}
    </Swiper>
  )
}

export default Slider