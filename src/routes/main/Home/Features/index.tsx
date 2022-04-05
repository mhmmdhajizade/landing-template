import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { AppFeaturesSec } from './style'
import image1 from 'assets/img/Rebalancer.svg'
import image2 from 'assets/img/Dashboard.svg'
import image3 from 'assets/img/Paper trading.svg'
import image4 from 'assets/img/Smart Cover.svg'
import image5 from 'assets/img/Options Bots.svg'
import image6 from 'assets/img/Signals.svg'
import { useTheme } from 'styled-components'

function AppFeatures() {

    const {lang} = useTheme()
    const dictionary = lang.dictionary

    return (
        <Fragment>
            <AppFeaturesSec as="section" className="container-fluid">
                <div className="container">
                    <Typography $fontSize='2.5rem' className='mt-5 mb-5'>{dictionary.appFeaturesMainTitle}</Typography>
                    <div className="row mb-4">
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image1} className='mb-2'/>
                            <Typography $fontSize="1.2rem" >
                                {dictionary.appFeaturesItem_1}
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image2} className='mb-2'/>
                            <Typography $fontSize="1.2rem" >
                                {dictionary.appFeaturesItem_2}
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image3} className='mb-2'/>
                            <Typography $fontSize="1.2rem" >
                                {dictionary.appFeaturesItem_3}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image4} className='mb-2'/>
                            <Typography $fontSize="1.2rem">
                                {dictionary.appFeaturesItem_4}
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image5} className='mb-2'/>
                            <Typography $fontSize="1.2rem" >
                                {dictionary.appFeaturesItem_5}
                            </Typography>
                        </div>
                        <div className="col-lg-4 col-12">
                            <img alt='' src={image6} className='mb-2'/>
                            <Typography $fontSize="1.2rem" >
                                {dictionary.appFeaturesItem_6}
                            </Typography>
                        </div>
                    </div>
                </div>
                <Button $bgColor={{ name: "primary"}} $textColor={{name: "white"}} $sizing='lg' className='mt-1'>{dictionary.appFeaturesButton}</Button>
            </AppFeaturesSec>
        </Fragment>
    )
}

export default AppFeatures