import React, { Fragment, useEffect, useState } from 'react'
import  SwiperClass, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
import { CommentSec } from './style';
import { Button, Typography } from 'components/HtmlElements';
import pImage1 from 'assets/img/dowfffnload.png'
import pImage2 from 'assets/img/download.png'
import pImage3 from 'assets/img/h5-testimonials-img-1.png'
import { useTheme } from 'styled-components';
import classNames from 'classnames';

interface iComments {
    id: number,
    commentText: string,
    job: string,
    userName: string,
    image: string
}

function Comments() {
    const [comments, setcomments] = useState<iComments[]>([
        {
            id: 1,
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et libero felis. Phasellus eleifend felis eget sem dapibus, ac mattis dui lacinia. Proin convallis accumsan nunc quis faucibus.",
            job: "Developer",
            userName: "user1",
            image: pImage1
        },
        {
            id: 2,
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et libero felis. Phasellus eleifend felis eget sem dapibus, ac mattis dui lacinia. Proin convallis accumsan nunc quis faucibus.",
            job: "Manager",
            userName: "user2",
            image: pImage2
        },
        {
            id: 3,
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et libero felis. Phasellus eleifend felis eget sem dapibus, ac mattis dui lacinia. Proin convallis accumsan nunc quis faucibus.",
            job: "Director",
            userName: "user3",
            image: pImage3
        }
    ])
    const {lang} = useTheme()
    const dictionary = lang.dictionary;
    

    const _refSwiper = React.useRef<SwiperClass>();
    useEffect(()=>{
        if( _refSwiper.current) {
            _refSwiper.current.rtlTranslate = dictionary['theme.dir'] === "rtl";
            _refSwiper.current.update();
        }
    },[dictionary])

    return (
        <Fragment>
            <CommentSec as="section" className='container-fluid  mt-5 mb-5'>
                <div className="container">
                    <div className='header'>
                        <div>
                            <Typography>
                                {dictionary.commentSectionSmallTitle}
                            </Typography>
                            <Typography $fontSize='3rem' className='mb-5 mainTitle'>
                                {dictionary.commentSectionMainTitle}
                            </Typography>
                        </div>
                        <div className='sliderBtn'>
                            <Button
                             className={classNames({
                                'p':lang.dictionary['theme.langLabel']==="en",
                                'n':lang.dictionary['theme.langLabel']==="fa"
                            })}
                            >
                                <i className="icon-left-arrow-7352 arrows"/>
                            </Button>
                            <Button 
                            className={classNames({
                                'n':lang.dictionary['theme.langLabel']==="en",
                                'p':lang.dictionary['theme.langLabel']==="fa"
                            })}
                            >
                                <i className="icon-right-arrow-7351 arrows"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Swiper
                        onSwiper={swiper=> _refSwiper.current = swiper}
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.n',
                            prevEl: '.p',
                        }}
                        loop
                    >
                        {comments.map((item, index) => {
                            return <SwiperSlide key={index}>
                                <div className='sliderSec'>
                                    <div className="row">
                                        <div className='col-lg-2 col-12'>
                                            <img alt='' src={item.image} />
                                        </div>
                                        <div className='col-lg-10 col-12'>
                                            <Typography className='commentText mb-4' $fontSize='1.5rem' >
                                                {item.commentText}
                                            </Typography>
                                            <div className='userDetail'>
                                                <Typography $fontSize='0.75rem'>
                                                    {item.job}
                                                </Typography>
                                                <Typography $fontSize='1.4rem'>
                                                    {item.userName}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        })}

                    </Swiper>
                </div>
            </CommentSec>
        </Fragment>
    )
}

export default Comments