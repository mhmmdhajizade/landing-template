import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { AppSecLayout } from './style'
import img from 'assets/img/h5-img-31.png'
import classNames from 'classnames'
import { useTheme } from 'styled-components'


const data = [
    {
        img: "asdasd",
        title: "asdasdas",
        desc: "asdasdasd"
    },
    {
        img: "asdasd",
        title: "asdasdas",
        desc: "asdasdasd"
    },
    {
        img: "asdasd",
        title: "asdasdas",
        desc: "asdasdasd"
    }
]

function AppParts() {

    const {lang} = useTheme()
    const dictionary = lang.dictionary


    return (
        <Fragment>
            <AppSecLayout as="section">
                <div className="container">
                    {data.map((item, index) => {
                        return (
                            <div className={classNames("row mainRow", {
                                "flex-row-reverse": index % 2,
                                "lastRow": index === 2
                            })} key={index}>
                                <div className="col-lg-6 col-12 imgSec ">
                                    <img alt='' src={img} />
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className='container textBox'>
                                        <Typography $fontSize='40px'>
                                            {dictionary.appSectionsItemTitle_1}
                                        </Typography>
                                        <div className="textSec">
                                            <div className="col-lg-9 col-12">
                                                <Typography $fontSize='18px'>
                                                    {dictionary.appSectionsItemDesc_1}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </AppSecLayout>

            {/* <AppSecLayout className='container-fluid'>
                <div className="row mainRow">
                    <div className="col-lg-6 col-12 leftCol">
                    <img alt='' src={img} />                        
                    </div>
                    <div className="col-lg-6 col-12 rightCol">
                        <Typography $fontSize='40px'>
                            The right things
                        </Typography>
                        <div className="textSec">

                            <div className="col-lg-9 col-12">
                                <Typography $fontSize='18px'>
                                    An gloriatur scripserit nec, porro eleifend ius nec. Sale integre hendrerit ea invenire deseruisse duo definitiones usu cu. Mea vide vocibus qui.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mainRow secondRow">
                    <div className="col-lg-6 col-12 leftCol">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-8 col-12">
                                <Typography $fontSize='40px'>
                                    The right things
                                </Typography>
                                <div className="textSec">
                                    <Typography $fontSize='18px'>
                                        An gloriatur scripserit nec, porro eleifend ius nec. Sale integre hendrerit ea invenire deseruisse duo definitiones usu cu. Mea vide vocibus qui.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 rightCol">
                        <img alt='' src={img} />
                    </div>
                </div>
                <div className="row lastRow mainRow">
                    <div className="col-lg-6 col-12 leftCol">
                        <img alt='' src={img} />
                    </div>
                    <div className="col-lg-6 col-12 rightCol">
                        <Typography $fontSize='40px'>
                            The right things
                        </Typography>
                        <div className="textSec">
                            <div className="col-lg-9 col-12">
                                <Typography $fontSize='18px'>
                                    An gloriatur scripserit nec, porro eleifend ius nec. Sale integre hendrerit ea invenire deseruisse duo definitiones usu cu. Mea vide vocibus qui.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </AppSecLayout> */}
        </Fragment>
    )
}

export default AppParts