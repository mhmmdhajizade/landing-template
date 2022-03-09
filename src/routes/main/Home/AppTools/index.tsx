import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { AppToolsSec } from './style'

function AppTools() {
    return (
        <Fragment>
            <AppToolsSec className='container-fluid'>
                <div className="row">
                    <div className="col-lg-6 col-12">
                    </div>
                    <div className="col-lg-6 col-12">
                        <Typography $fontSize='2rem' className='mainTitle'>How does this app works?</Typography>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-2 col-12">
                                    <div className="line">
                                        <Button $isCircle={true} $bgColor={{ name: "white" }} $borderColor={{ name: 'tradewind' }} className='btn'>
                                            <i className="icon-desktop-mobile  icons"></i>
                                        </Button>
                                        <Button $isCircle={true} $bgColor={{ name: "white" }} $borderColor={{ name: 'tradewind' }} className='btn'>
                                            <i className="icon-cloud-download-svgrepo-com icons"></i>
                                        </Button>
                                        <Button $isCircle={true} $bgColor={{ name: "white" }} $borderColor={{ name: 'tradewind' }} className='btn'>
                                            <i className="icon-shield-svgrepo-com icons"></i>
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12">
                                    <div className="textBox">
                                        <Typography $fontSize='1.75rem'>
                                            Make a profile
                                        </Typography>
                                        <Typography $fontSize='1.1rem'>
                                            We use a customized application tobe
                                            specifically designed a testing gnose
                                            to keep away for people.
                                        </Typography>
                                    </div>
                                    <div className="textBox">
                                        <Typography $fontSize='1.75rem'>
                                            Download it for Free
                                        </Typography>
                                        <Typography $fontSize='1.1rem'>
                                            We use a customized application tobe
                                            specifically designed a testing gnose
                                            to keep away for people.
                                        </Typography>
                                    </div>
                                    <div className="textBox">
                                        <Typography $fontSize='1.75rem'>
                                            Enjoy this App
                                        </Typography>
                                        <Typography $fontSize='1.1rem'>
                                            We use a customized application tobe
                                            specifically designed a testing gnose
                                            to keep away for people.
                                        </Typography>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppToolsSec>
        </Fragment>
    )
}

export default AppTools


//<Button $isCircle={true} $bgColor={{name:"white"}}>hi</Button>
/*Make a profile
We use a customized application tobe
specifically designed a testing gnose
to keep away for people.

Download it for Free
We use a customized application tobe
specifically designed a testing gnose
to keep away for people.

Enjoy this App
We use a customized application tobe
specifically designed a testing gnose
to keep away for people. */