import React, { Fragment, useState } from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CommentSec } from './style';
import { Button, Typography } from 'components/HtmlElements';
import pImage1 from 'assets/img/dowfffnload.png'
import pImage2 from 'assets/img/download.png'
import pImage3 from 'assets/img/h5-testimonials-img-1.png'

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
    return (
        <Fragment>
            <CommentSec as="section" className='container-fluid'>
                <div className="container">
                    <div className='header'>
                        <div>
                            <Typography>
                                What our users say about us
                            </Typography>
                            <Typography $fontSize='3rem'>
                                Testimonial
                            </Typography>
                        </div>
                        <div className='sliderBtn'>
                            <Button id='p'><i className="icon-left-arrow-7352 arrows"></i></Button>
                            <Button id='n'><i className="icon-right-arrow-7351 arrows"></i></Button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '#n',
                            prevEl: '#p',
                        }}
                        loop
                        freeMode
                        scrollbar={{
                            draggable: true,
                            hide: true
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {comments.map((item, index) => {
                            return <SwiperSlide>
                                <div className='sliderSec'>
                                    <div className="row">
                                        <div className='col-lg-2 col-3'>
                                            <img alt='' src={item.image} />
                                        </div>
                                        <div className='col-lg-10 col-9'>
                                            <Typography className='commentText' $fontSize='1.5rem'>
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