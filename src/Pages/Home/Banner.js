import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src='https://i.ibb.co/gvD4zNh/banner-1.jpg' className="w-full h-5/6" alt='' />

                    /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/YTkXp0D/banner-3.jpg" className="w-full h-5/6" alt='' /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/d0pRBT9/banner-4-1.jpg" className="w-full h-5/6" alt='' /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Banner;