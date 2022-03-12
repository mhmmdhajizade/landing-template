import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { DownloadBoxSec } from './style'
import image from 'assets/img/h5-img-31.png'
import { useTheme } from 'styled-components'

function DownloadBox() {

    const {lang} = useTheme()
    const dictionary = lang.dictionary

    return (
        <Fragment>
            <DownloadBoxSec as="section" className='container-fluid'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <Typography $fontSize='3rem'>
                                {dictionary.downloadBoxMainTitle}
                            </Typography>
                            <Typography>
                                {dictionary.downloadBoxDescription}
                            </Typography>
                            <div className="downloadBtn">
                                <Button $borderColor={{ name: "black" }} $textColor={{ name: "black" }} $bgColor={{ name: "white" }}>
                                    <i className="icon-1efb03c7b24448b2a95272321bf670ba icons"></i>
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