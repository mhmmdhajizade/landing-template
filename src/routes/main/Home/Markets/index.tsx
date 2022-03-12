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
            <MarketSec as="section" className='container-fluid'>
                <div className='container'>
                    <Typography $fontSize='48px' className='title'>
                        {dictionary.marketMainTitle}
                    </Typography>
                    <Typography $fontSize='20px'>
                        {dictionary.marketParagraph}
                    </Typography>
                    <div className="row">
                        <div className="market col-lg-4 col-12">
                            <img alt='' src={img1} />
                            <Typography $fontSize='30px'>
                                Bear markets
                            </Typography>
                            <Typography $fontSize='18px'>
                                Use DCA Short bots to borrow and sell tokens at the current price and buy them back at a lower price
                            </Typography>
                        </div>
                        <div className="market col-lg-4 col-12">
                            <img alt='' src={img2} />
                            <Typography $fontSize='30px'>
                                Bull markets
                            </Typography>
                            <Typography $fontSize='18px'>
                                Use DCA Long bots to buy the natural dips and sell the spikes as the price rises over time, achieving a better average entry price for your positions
                            </Typography>
                        </div>
                        <div className="market col-lg-4 col-12">
                            <img alt='' src={img3} />
                            <Typography $fontSize='30px'>
                                Sideways markets
                            </Typography>
                            <Typography $fontSize='18px'>
                                Use Grid bots to pick up cheaper tokens when they hit support levels and sell them when they’re close to resistance levels
                            </Typography>
                        </div>
                    </div>
                </div>
            </MarketSec>
        </Fragment>
    )
}

export default Markets