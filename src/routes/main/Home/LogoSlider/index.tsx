import React, { Fragment, useEffect, useState } from 'react'
import SwiperClass, { Navigation, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import logo1light from 'assets/img/light/audi-14.svg'
import logo2light from 'assets/img/light/bmw-logo.svg'
import logo3light from 'assets/img/light/honda-11.svg'
import logo4light from 'assets/img/light/linkedin-icon-1.svg'
import logo5light from 'assets/img/light/nasa-2.svg'
import logo6light from 'assets/img/light/puma-logo.svg'
import logo7light from 'assets/img/light/redbull-arena-black.svg'
import logo8light from 'assets/img/light/under-armour.svg'
import logo9light from 'assets/img/light/valentino-1.svg'
import logo1dark from 'assets/img/dark/audi-14.svg'
import logo2dark from 'assets/img/dark/bmw-logo.svg'
import logo3dark from 'assets/img/dark/honda-11.svg'
import logo4dark from 'assets/img/dark/linkedin-icon-1.svg'
import logo5dark from 'assets/img/dark/nasa-2.svg'
import logo6dark from 'assets/img/dark/puma-logo.svg'
import logo7dark from 'assets/img/dark/redbull-arena-black.svg'
import logo8dark from 'assets/img/dark/under-armour.svg'
import logo9dark from 'assets/img/dark/valentino-1.svg'


// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LogoSliderSec, LogoImg } from './style';
import { Typography } from 'components/HtmlElements';
import { useTheme } from 'styled-components';

interface iImages {
    index: number,
    url: string,
    height?: string,
    width?: string
}

function LogoSlider() {
    const [images, setimages] = useState<iImages[]>([])
    const { lang, style } = useTheme()
    const dictionary = lang.dictionary

    const _refSwiper = React.useRef<SwiperClass>();

    useEffect(() => {
        if (_refSwiper.current) {
            _refSwiper.current.rtlTranslate = dictionary['theme.dir'] === "rtl";
            _refSwiper.current.update();
        }
        if (localStorage.getItem("style") === "light") {
            setimages([
                {
                    index: 0,
                    url: logo1light
                },
                {
                    index: 1,
                    url: logo2light,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 2,
                    url: logo3light,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 3,
                    url: logo4light,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 4,
                    url: logo5light
                },
                {
                    index: 5,
                    url: logo6light
                },
                {
                    index: 6,
                    url: logo7light
                },
                {
                    index: 7,
                    url: logo8light,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 8,
                    url: logo9light
                },
            ])
        }
        else {
            setimages([
                {
                    index: 0,
                    url: logo1dark
                },
                {
                    index: 1,
                    url: logo2dark,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 2,
                    url: logo3dark,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 3,
                    url: logo4dark,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 4,
                    url: logo5dark
                },
                {
                    index: 5,
                    url: logo6dark
                },
                {
                    index: 6,
                    url: logo7dark
                },
                {
                    index: 7,
                    url: logo8dark,
                    height: "50%",
                    width: "50%"
                },
                {
                    index: 8,
                    url: logo9dark
                },
            ])
        }


    }, [style.name, dictionary])

    return (
        <Fragment>
            <LogoSliderSec as="section" className='pt-3'>
                <div className='container text-center mb-3'>
                    <Typography as="h2">Trusted the world over</Typography>
                </div>
                <div className="container">
                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={5}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop
                        freeMode
                        onSwiper={swiper => _refSwiper.current = swiper}
                    >
                        {images.map((item, index) => {
                            return <SwiperSlide key={index}>
                                <LogoImg alt='' src={item.url} $height={item.height ? item.height : undefined} $width={item.width ? item.width : undefined} />
                                <div className="container">
                                    <p>jhbch</p>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </LogoSliderSec>
        </Fragment>
    )
}

export default LogoSlider