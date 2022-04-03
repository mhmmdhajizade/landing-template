import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { MarketSec } from './style'
import img1 from 'assets/img/h5-img-10.png'
import img2 from 'assets/img/h5-img-11.png'
import img3 from 'assets/img/h5-img-12.png'
import { useTheme } from 'styled-components'

function Markets() {

    const {lang} = useTheme()
    const dictionary = lang.dictionary

    return (
        <Fragment>
            <MarketSec as="section" className='container-fluid mt-5 mb-5'>
                <div className='container'>
                    <Typography $fontSize='48px' className='title mb-3'>
                        {dictionary.marketMainTitle}
                    </Typography>
                    <Typography $fontSize='20px'>
                        {dictionary.marketParagraph}
                    </Typography>
                    <div className="row mt-5">
                        <div className="market col-lg-4 col-12">
                            <img alt='' src={img1} className='mb-5'/>
                            <Typography $fontSize='30px' className='mb-3'>
                                {dictionary.marketItemTitle_1}
                            </Typography>
                            <Typography $fontSize='18px'>
                                {dictionary.marketItemDesc_1}
                            </Typography>
                        </div>
                        <div className="market col-lg-4 col-12">
                            <img alt='' src={img2} className='mb-5'/>
                            <Typography $fontSize='30px' className='mb-3'>
                                {dictionary.marketItemTitle_2}
                            </Typography>
                            <Typography $fontSize='18px'>
                                {dictionary.marketItemDesc_2}
                            </Typography>
                        </div>
                        <div className="market col-lg-4 col-12">
                            <img alt='' src={img3} className='mb-5'/>
                            <Typography $fontSize='30px' className='mb-3'>
                                {dictionary.marketItemTitle_3}
                            </Typography>
                            <Typography $fontSize='18px'>
                                {dictionary.marketItemDesc_3}
                            </Typography>
                        </div>
                    </div>
                </div>
            </MarketSec>
        </Fragment>
    )
}

export default Markets