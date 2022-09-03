import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import InterestsIcon from '@mui/icons-material/Interests';
import "./Datingslider.css"
function DatingSlider() {
    return (
        <div className='outercont'>
            <div className='insidecardcont'>
                <div><IconButton ><PersonIcon /></IconButton></div>
                <div><IconButton ><InterestsIcon /></IconButton></div>
                <div><IconButton ><QuestionAnswerIcon /></IconButton></div>
                
            </div>
            {/* <Swiper
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
                 
            </Swiper> */}
        </div>
    )
}

export default DatingSlider