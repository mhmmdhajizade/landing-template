import React, { Fragment, useEffect, useState } from 'react'
import { Navigation, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import logo1 from 'assets/img/audi-14.svg'
import logo2 from 'assets/img/bmw-logo.svg'
import logo3 from 'assets/img/honda-11.svg'
import logo4 from 'assets/img/linkedin-icon-1.svg'
import logo5 from 'assets/img/nasa-2.svg'
import logo6 from 'assets/img/puma-logo.svg'
import logo7 from 'assets/img/redbull-arena-black.svg'
import logo8 from 'assets/img/under-armour.svg'
import logo9 from 'assets/img/valentino-1.svg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LogoSliderSec, LogoImg } from './style';
import { Typography } from 'components/HtmlElements';
import index from 'constants/asyncComponent';

interface iImages {
    index: number,
    url: string,
    height?: string,
    width?: string
}

function LogoSlider() {
    const [images, setimages] = useState<iImages[]>([])

    useEffect(() => {
        setimages([
            {
                index: 0,
                url: logo1
            },
            {
                index: 1,
                url: logo2,
                height: "50%",
                width: "50%"
            },
            {
                index: 2,
                url: logo3,
                height: "50%",
                width: "50%"
            },
            {
                index: 3,
                url: logo4,
                height: "50%",
                width: "50%"
            },
            {
                index: 4,
                url: logo5
            },
            {
                index: 5,
                url: logo6
            },
            {
                index: 6,
                url: logo7
            },
            {
                index: 7,
                url: logo8,
                height: "50%",
                width: "50%"
            },
            {
                index: 8,
                url: logo9
            },
        ])


    }, [])

    return (
        <Fragment>
            <LogoSliderSec as="section">
                <div className='container-fluid text-center'>
                    <Typography as="h2">Companies we are working with:</Typography>
                </div>
                <div className="container">
                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={6}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop
                        freeMode
                        scrollbar={{
                            draggable: true,
                            hide: true
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {images.map((item, index) => {
                            return <SwiperSlide>
                                <LogoImg alt='' src={item.url} $height={item.height ? item.height : undefined} $width={item.width ? item.width : undefined} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </LogoSliderSec>
        </Fragment>
    )
}

export default LogoSlider