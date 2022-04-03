import { IHeaderProps } from 'containers/Main/Header'
import React, { Fragment, useEffect } from 'react'
import Awards from '../AboutUs/Awards'
import DownloadBox from '../Home/DownloadBox'
import MainSec from './MainSec'
import Options from './Options'
import Stats from './Stats'

interface IProps {
  callbackHeader?: (headerProps: IHeaderProps['headerProps']) => void
}

function OurServices({ callbackHeader }: IProps) {

  useEffect(() => {
    if(callbackHeader){
      callbackHeader({
        color: "black",
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
      <MainSec />
      <Stats />
      <Awards />
      <DownloadBox />
      <Options />
      <Awards />
    </Fragment>
  )
}

export default OurServices