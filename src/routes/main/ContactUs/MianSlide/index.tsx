import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { MainSlideSec } from './style'

function MainSlide() {
  return (
    <Fragment>
      <MainSlideSec as="section" className='container-fluid'>
        <div className="container">
          <div className="col-lg-4 col-12">
            <Typography $fontSize='4rem'>
              Contact Us
            </Typography>
            <Typography $fontSize='1.1rem'>
              Lorem ipsum dolor sit amet simul integre putant,
              modus nibh graeco consectetuer ponderum.
            </Typography>
          </div>
        </div>
      </MainSlideSec>
    </Fragment>
  )
}

export default MainSlide