import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
    return (
        <>
            <div className="ml-projects-area pt-0 ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <h2>Proud Projects That Make Us Stand Out</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="container-fluid">
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
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                        modules={[Pagination, Autoplay]}
                        className="ml-projects-slides"
                    >
                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/projects-img1.jpg" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/projects-img2.jpg" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/projects-img3.jpg" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/projects-img4.jpg" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/projects-img5.jpg" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/project-details">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default Projects;