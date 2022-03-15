import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { MainSecLay } from './style'

function MainSec() {
    return (
        <Fragment>
            <MainSecLay as="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col12">
                            <Typography $textColor={{ name: "txt" }} $fontSize='4rem'>
                                Our Services
                            </Typography>
                            <Typography $textColor={{ name: "txt" }} $fontSize='1.2rem'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Typography>
                        </div>
                    </div>
                </div>

            </MainSecLay>
        </Fragment>
    )
}

export default MainSec