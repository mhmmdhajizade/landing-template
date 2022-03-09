import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { DownloadBoxSec } from './style'
import image from 'assets/img/h5-img-31.png'

function DownloadBox() {
    return (
        <Fragment>
            <DownloadBoxSec className='container-fluid'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <Typography $fontSize='3rem'>
                                Manage your positions in one tap with the 3Commas mobile app
                            </Typography>
                            <Typography>
                                Download the mobile application, track strategy statistics, launch bots, and close orders. Whether you’re at home or on the road, manage your positions anywhere.
                            </Typography>
                            <div className="downloadBtn">
                                <Button $borderColor={{ name: "black" }} $textColor={{ name: "black" }} $bgColor={{ name: "white" }}>
                                    <i className="icon-apple-seeklogo-com icons"></i>
                                    <div>
                                        <Typography $fontSize='0.75rem' className='smaller'>Download on the</Typography>
                                        <Typography $fontSize='1.5rem'>App Store</Typography>
                                    </div>
                                </Button>
                                <Button $borderColor={{ name: "black" }} $textColor={{ name: "black" }} $bgColor={{ name: "white" }}>
                                    <i className="icon-icons8-google-play icons"></i>
                                    <div>
                                        <Typography $fontSize='0.75rem' className='smaller'>Get it on</Typography>
                                        <Typography $fontSize='1.5rem'>Google Play</Typography>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12" id='rightCol'>
                            <img alt='' src={image} />
                        </div>
                    </div>
                </div>
            </DownloadBoxSec>
        </Fragment>
    )
}

export default DownloadBox