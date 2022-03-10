import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { AppFeaturesSec } from './style'
import image1 from 'assets/img/Rebalancer.svg'
import image2 from 'assets/img/Dashboard.svg'
import image3 from 'assets/img/Paper trading.svg'
import image4 from 'assets/img/Smart Cover.svg'
import image5 from 'assets/img/Options Bots.svg'
import image6 from 'assets/img/Signals.svg'

function AppFeatures() {
    return (
        <Fragment>
            <AppFeaturesSec as="section" className="container-fluid">
                <div className="container">
                    <Typography $fontSize='2.5rem'>Straightforward and quick</Typography>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image1} />
                            <Typography $fontSize="1.2rem">
                                Create portfolios with any coin alocation and rebalance your account with a click.
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image2} />
                            <Typography $fontSize="1.2rem">
                                Add multiple accounts to track your portfolio and check your daily PnL.
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image3} />
                            <Typography $fontSize="1.2rem">
                                Trade without money. Test strategies safely and without any risk.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image4} />
                            <Typography $fontSize="1.2rem">
                                Accrue additional profit with unexpected market moves. Sell and buy back coins.
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image5} />
                            <Typography $fontSize="1.2rem">
                                A simple set of automated strategies to trade options on an exchange.
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image6} />
                            <Typography $fontSize="1.2rem">
                                Subscribe to signals provided by other traders to copy strategies.
                            </Typography>
                        </div>
                    </div>
                </div>
                <Button $bgColor={{ name: "tradewind"}} $textColor={{name: "white"}} $sizing='lg'>Sign up for free</Button>
            </AppFeaturesSec>
        </Fragment>
    )
}

export default AppFeatures