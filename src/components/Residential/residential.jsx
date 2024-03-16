import React from 'react';
import './residential.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residential = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container" id='residential'>
                <div className="r-head flexColStart">
                    <span className='orangeText'>Popular Choices</span>
                    <span className='primaryText'>Resident Services</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt='home' />
                                <span className="secondaryText r-price">
                                    <span style={{ color: 'orange' }}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}


const SliderButtons = () => {
    const swiper = useSwiper();
    
    return (
        <div className="flexCenter r-button">
            <button  onClick={() => swiper.slidePrev()}>&lt;</button> 
            <button  onClick={() => swiper.slideNext()}>&gt;</button>                                                
        </div>
    );
}
export default Residential;