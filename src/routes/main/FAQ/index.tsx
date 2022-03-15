import { Button, Typography } from 'components/HtmlElements'
import { Input } from 'components/HtmlElements/Form'
import React, { Fragment, useState } from 'react'
import image from 'assets/img/p9-img-1-300x256.jpg'
import { FaqPageSec } from './style'

function FaqPage() {

    const [questions, setQuestions] = useState([
        {
            title: "Where is my order? Quisque molestie",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "How can I return an item purchased online?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "Can I cancel or change my order?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "I have promotional or discount code?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "What are the delivery types you use?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "How can I pay for my purchases?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "How can I find Theme style that I like?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "What are the delivery types you use?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "Can I cancel my order?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "How can I exchange an item bought online?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "I have a promotional or discount code?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
        {
            title: "In which countries can I shop online?",
            description: "Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id."
        },
    ])
    const [categories, setCategories] = useState([
        {
            name: "APPS",
            count: 5
        },
        {
            name: "BUSINESS",
            count: 6
        },
        {
            name: "FITNESS",
            count: 18
        },
        {
            name: "FOOD",
            count: 14
        },
        {
            name: "INNOVATION",
            count: 8
        },
        {
            name: "INSPIRATION",
            count: 3
        },
        {
            name: "MARKET",
            count: 15
        },
        {
            name: "PATNERS",
            count: 17
        },
        {
            name: "SPORT",
            count: 3
        },
        {
            name: "TECH",
            count: 9
        },
        {
            name: "VIDEOS",
            count: 17
        },

    ])

    return (
        <Fragment>
            <FaqPageSec as="section">
                <div className="container-fluid mainSlide">
                    <div className="container">
                        <div className="col-lg-4 col-12">
                            <Typography $fontSize='4rem'>
                                FAQ Page
                            </Typography>
                            <Typography $fontSize='1.1rem'>
                                Lorem ipsum dolor sit amet simul integre putant,
                                modus nibh graeco consectetuer ponderum.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="container contentSection">
                    <div className="row">
                        <div className="col-lg-9 col-9">
                            {questions.map((question, index) => {
                                return <div className='questionBox' key={index}>
                                    <Typography className='numbers'>{index < 9 ? `0${index + 1}` : `${index + 1}`}.</Typography>
                                    <div className="container-fluid">
                                        <div className="container">
                                            <div className="title">
                                                <Typography $fontSize='2rem'>{question.title}</Typography>
                                            </div>
                                            <div className="description" id={`p${index}`}>
                                                <Typography $textColor={{ name: "txt", mood: "lighter" }} $fontSize='1.1rem' >{question.description}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="col-lg-3 col-3">
                            <div className="searchBox">
                                <div className="searchInp">
                                    <Input type="search" placeholder='Type your serch' />
                                    <Button><i className='icon-search' /></Button>
                                </div>
                            </div>
                            <div className="categories">
                                <Typography $fontSize='1.5rem'>Categories</Typography>
                                {categories.map((category, index) => {
                                    return <div className='category'>
                                        <Typography $fontSize='0.7rem'>{`${category.name} (${category.count})`}</Typography>
                                    </div>
                                })}
                            </div>
                            <div className="banner">
                                <Typography $fontSize='1.5rem'>Place your banner</Typography>
                                <img src={image} alt="" />
                                <Typography $fontSize='1.5rem'>
                                    Why we are here?
                                </Typography>
                                <Typography $fontSize='1.1rem'>
                                    Lorem ipsum dolor sit amet, vis vocent malorum scriptorem mei ex. At mei vocent ceteros.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </FaqPageSec>
        </Fragment>
    )
}

export default FaqPage