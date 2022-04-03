import { IHeaderProps } from 'containers/Main/Header'
import React, { Fragment, useEffect } from 'react'
import LogoSlider from '../Home/LogoSlider'
import Awards from './Awards'
import CompanyParts from './CompanyParts'
import MainSlider from './MainSlider'
import Slider from './SecondSlider'

interface IProps {
  callbackHeader?: (headerProps: IHeaderProps['headerProps']) => void
}
function AboutUs({ callbackHeader }: IProps) {

  useEffect(() => {
    if(callbackHeader){
      callbackHeader({
        color: "white",
      })
    }
    return()=>{
      if(callbackHeader){
        callbackHeader({
          color: "white",
        })
      }
    }
  }, [])
  return (
    <Fragment>
      <MainSlider />
      <Awards />
      <CompanyParts />
      <Slider />
      <LogoSlider />
    </Fragment>
  )
}

export default AboutUs