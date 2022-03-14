import React, { Fragment } from 'react'
import LogoSlider from '../Home/LogoSlider'
import Awards from './Awards'
import CompanyParts from './CompanyParts'
import MainSlider from './MainSlider'
import Slider from './SecondSlider'

function AboutUs() {
  return (
    <Fragment>
        <MainSlider />
        <Awards />
        <CompanyParts />
        <Slider  />
        <LogoSlider />
    </Fragment>
  )
}

export default AboutUs