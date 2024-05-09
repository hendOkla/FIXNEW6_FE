import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partner = () => {
    return (
        <>
            <div className="agency-portfolio-partner-area ptb-80">
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                            }
                        }}
                        modules={[Autoplay]}
                        className="agency-portfolio-partner-slides"
                    >
                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner1.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner2.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner3.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner4.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner5.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner6.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-agency-portfolio-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/agency-portfolio-partner-image/ap-partner4.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>
                    </Swiper> 
                </div>
            </div>
        </>
    )
}

export default Partner;  