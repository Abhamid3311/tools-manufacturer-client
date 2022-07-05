import React, { useRef, useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';
import './Reviews.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div id='review' className='my-12'>
            <h2 className='text-accent text-4xl text-center font-bold my-12'>Testimonial</h2>




            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide> <Review
                        key={review._id}
                        review={review}
                    ></Review> </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Reviews;