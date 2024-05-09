import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ProductSlider = ({ images }) => {
    return (
        <>
            <Swiper 
                navigation={true} 
                modules={[Navigation]} 
                className="products-details-image"
            >
                {images && images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="single-image-box">
                            <img src={img.img} alt="img" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ProductSlider;  