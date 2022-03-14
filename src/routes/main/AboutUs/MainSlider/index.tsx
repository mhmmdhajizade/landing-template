import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { MainSliderSec } from './style'

function MainSlider() {
  return (
    <Fragment>
      <MainSliderSec as="section" className='container-fluid mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col12">
              <Typography $textColor={{ name: "white" }} $fontSize='4rem'>
                About Us
              </Typography>
              <Typography $textColor={{ name : "white"}} $fontSize='1.2rem'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
            </div>
          </div>
        </div>
      </MainSliderSec>
    </Fragment>
  )
}

export default MainSlider