import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper";
import "./Slider.css";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import img1 from "../images/author1.png";
import img2 from "../images/author2.png";
import img3 from "../images/author3.png";
import img4 from "../images/author4.png";
import img5 from "../images/author5.png";
function Slider() {
    return (
        <div className='mainslideDiv'>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} /></SwiperSlide>
                <SwiperSlide><img src={img2} /></SwiperSlide>
                <SwiperSlide><img src={img3} /></SwiperSlide>
                <SwiperSlide><img src={img4} /></SwiperSlide>
                <SwiperSlide><img src={img5} /></SwiperSlide>
                 
            </Swiper>
        </div>
    )
}

export default Slider