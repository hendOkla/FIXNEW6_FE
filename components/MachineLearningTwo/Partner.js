import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partner = () => {
    return (
        <>
            <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
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
                            1024: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                            },
                        }}
                        modules={[Autoplay]}
                        className="partner-slides"
                    > 
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-1.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover1.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-2.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover2.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-3.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover3.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-10.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover10.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-5.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover5.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-6.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover6.png" alt="image" />
                                </a> 
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-ml-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partner-img/partner-7.png" alt="image" />
                                    <img src="/images/partner-img/partner-hover7.png" alt="image" />
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper> 
                </div>
            </div>
        </>
    );
}

export default Partner;