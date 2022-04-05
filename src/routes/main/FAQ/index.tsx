import { Button, Typography } from 'components/HtmlElements'
import { Input } from 'components/HtmlElements/Form'
import React, { Fragment, useEffect, useState } from 'react'
import image from 'assets/img/p9-img-1-300x256.jpg'
import { FaqPageSec , FaqBox } from './style'
import { IHeaderProps } from 'containers/Main/Header'
import { Accordion } from 'react-bootstrap'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import classNames from 'classnames'

interface IProps {
    callbackHeader?: (headerProps: IHeaderProps['headerProps']) => void
}

interface ICollapse {
    [index: number]: boolean;
}


const questions = [
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
]

function FaqPage({ callbackHeader }: IProps) {
    const [iconClass, setIconClass] = useState("icon-plus")

    const [collaspes,setCollaspses] = useState<ICollapse>((): ICollapse => {
        var initial: ICollapse = {}
        for (let i = 0; i < 12; i++) {
            initial[i] = false
        }
        console.log(initial)
        return initial
    })

    useEffect(() => {
        if (callbackHeader) {
            callbackHeader({
                color: "black",
            })
        }
        return () => {
            if (callbackHeader) {
                callbackHeader({
                    color: "white",
                })
            }
        }
    }, [])

    function collapseHandler(index: number) {
        setCollaspses(prev=>{
            var newstate = {...prev}
            for ( let i = 0 ; i<12 ; i++){
                if (i === index){
                    newstate[i] = !newstate[i]
                }
                else{
                    newstate[i] = false
                }
            }
            return(newstate);
        })
        var icon = document.getElementById(`i${index}`)
        if (icon) {
            if (collaspes[index] === false) {
                icon.classList.remove('icon-plus')
                icon.classList.add('icon-minus')
            }
            else {
                icon.classList.remove('icon-minus')
                icon.classList.add('icon-plus')
            }
        }
    }

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
            <FaqPageSec as="section" >
                <div className="container-fluid mainSlide">
                    <div className="container">
                        <div className="col-lg-4 col-12">
                            <Typography $fontSize='4rem' className='mb-3'>
                                FAQ Page
                            </Typography>
                            <Typography $fontSize='1.1rem'>
                                Lorem ipsum dolor sit amet simul integre putant,
                                modus nibh graeco consectetuer ponderum.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="container contentSection mt-5">
                    <div className="row">
                        <div className={classNames("col-lg-9 " , {
                            "col-12": window.innerWidth <= 760,
                            "col-9":  window.innerWidth > 760
                        })}>
                            {questions.map((question, index) => {
                                return <FaqBox className={classNames('questionBox')} $isOpen={collaspes[index]}  key={index}>
                                    <Typography className='numbers'>{index < 9 ? `0${index + 1}` : `${index + 1}`}.</Typography>
                                    <div className="container-fluid">
                                        <div className="container">
                                            <div className="title" id={`h${index}`} onClick={e => collapseHandler(index)} data-bs-toggle="collapse" data-bs-target={`#p${index}`} aria-expanded="false" aria-controls={`p${index}`}>
                                                <div className="row">
                                                    <div className="col-lg-11 col-11">
                                                        <Typography $fontSize='2rem'>{question.title}</Typography>
                                                    </div>
                                                    <div className="col-lg-1 col-1">
                                                        <i className={classNames({
                                                            "icon-plus": collaspes[index] === false,
                                                            "icon-minus": collaspes[index] === true
                                                        })} id={`i${index}`} />
                                                    </div>
                                                </div>
                                            </div>
                                       {collaspes[index] &&
                                            <div className="description " id={`p${index}`} >
                                                <Typography $textColor={{ name: "txt", mood: "lighter" }} $fontSize='1.1rem' id={`p${index}`} >{question.description}</Typography>
                                            </div>}
                                        </div>
                                    </div>
                                </FaqBox>
                            })}
                        </div>
                        <div className="col-lg-3 col-3">
                            <div className="searchBox">
                                <div className="searchInp mb-5">
                                    <Input type="search" placeholder='Type your serch' />
                                    <Button><i className='icon-search' /></Button>
                                </div>
                            </div>
                            <div className="categories">
                                <Typography $fontSize='1.5rem' className='mb-3'>Categories</Typography>
                                {categories.map((category, index) => {
                                    return <div className='category mb-2'>
                                        <Typography $fontSize='0.7rem'>{`${category.name} (${category.count})`}</Typography>
                                    </div>
                                })}
                            </div>
                            <div className="banner">
                                <Typography $fontSize='1.5rem' className='mt-4 mb-5'>Place your banner</Typography>
                                <img src={image} alt="" className='mb-5' />
                                <Typography $fontSize='1.5rem' className='mb-3'>
                                    Why we are here?
                                </Typography>
                                <Typography $fontSize='1.1rem' className='collapse' id={`p`}>
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

// classNames({
//     'icon-plus': document.getElementById(`p${index}`) ? document.getElementById(`p${index}`).classList.contains('show'): ,
//     'icon-minus':
// })