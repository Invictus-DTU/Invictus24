import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div className=''>
      <Slider {...settings}>
        {data.map((d)=> (
          <div>
            <img src={d.img} alt={d.alt} className=' h-72' />
          </div>
        ))}
      </Slider>  
    </div>
  )
}

const data = [
  {
    img:"/bg.png", 
    alt:"bg",
  },
  {
    img:"/bg.png", 
    alt:"bg",
  },
  {
    img:"/bg.png", 
    alt:"bg",
  },
  {
    img:"/bg.png", 
    alt:"bg",
  },
]

export default Carousel