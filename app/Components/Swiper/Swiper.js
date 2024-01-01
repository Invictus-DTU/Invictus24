import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './swiper.css'
import 'swiper/css/navigation';

const Slider = ({slides}) => {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{clickable: true,}}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map( (slide) => (
            <SwiperSlide key={slide.image}>
                <img className='slider-image' src={slide.image} alt={slide.title}/>
            </SwiperSlide>
        ) )}
    </Swiper>
  )
}

export default Slider