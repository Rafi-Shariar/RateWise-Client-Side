import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BannerSection = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 4 seconds
    pauseOnHover: true,
  };
    return (
        <div className='overflow-hidden'>
            <Slider {...settings}>
                <div><Banner1/></div>
                <div><Banner2/></div>
                <div><Banner3/></div>
            
            </Slider>
        </div>
    );
};

export default BannerSection;