import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { AppToolsSec } from './style'
import image from 'assets/img/h5-img-31.png'
import { useTheme } from 'styled-components'

function AppTools() {

    const {lang} = useTheme()
    const dictionary = lang.dictionary

    return (
        <Fragment>
            <AppToolsSec as="section" className='container-fluid'>
                <div className="container">
                    <div className="row layout">
                        <div className="col-lg-6 col-12">
                            <img alt='' src={image} />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Typography $fontSize='2rem' className='mainTitle mb-5'>{dictionary.appToolsMainTitle}</Typography>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3 col-4">
                                        <div className="line">
                                            <Button $isCircle={true} $bgColor={{ name: "light" }} $borderColor={{ name: 'primary' }} className='btn'>
                                                <i className="icon-linearicons_laptop-phone icons"></i>
                                            </Button>
                                            <Button $isCircle={true} $bgColor={{ name: "light" }} $borderColor={{ name: 'primary' }} className='btn'>
                                                <i className="icon-lnr-cloud icons"></i>
                                            </Button>
                                            <Button $isCircle={true} $bgColor={{ name: "light" }} $borderColor={{ name: 'primary' }} className='btn'>
                                                <i className="icon-shield-check icons"></i>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-8">
                                        <div className="textBox ">
                                            <Typography $fontSize='1.75rem' className='titles'>
                                                {dictionary.appToolsItemTitle_1}
                                            </Typography>
                                            <Typography $fontSize='1rem' className='descs'>
                                                {dictionary.appToolsItemDesc_1}
                                            </Typography>
                                        </div>
                                        <div className="textBox ">
                                            <Typography $fontSize='1.75rem' className='titles'>
                                                {dictionary.appToolsItemTitle_2}
                                            </Typography>
                                            <Typography $fontSize='1rem' className='descs'>
                                                {dictionary.appToolsItemDesc_2}
                                            </Typography>
                                        </div>
                                        <div className="textBox ">
                                            <Typography $fontSize='1.75rem' className='titles'>
                                                {dictionary.appToolsItemTitle_3}
                                            </Typography>
                                            <Typography $fontSize='1rem' className='descs'>
                                                {dictionary.appToolsItemDesc_3}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppToolsSec>
        </Fragment>
    )
}

export default AppTools


