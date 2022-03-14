import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { SecondSliderSec } from './style'
import img from "assets/img/AboutUs/about-us-img-1-2048x863.jpg"

function Slider() {
  return (
    <Fragment>
        <SecondSliderSec as="section" className='container-fluid mb-5'>
          <div className="container">
            <Typography $fontSize='3rem' className='title'>We build and transform businesses through strategy</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </div>
          <img src={img} alt='' />
        </SecondSliderSec>
    </Fragment>
  )
}

export default Slider