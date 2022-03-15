import React, { Fragment } from 'react'
import Awards from '../AboutUs/Awards'
import DownloadBox from '../Home/DownloadBox'
import MainSec from './MainSec'

function OurServices() {
  return (
    <Fragment>
      <MainSec />
      <Awards />
      <DownloadBox />
      <Awards />
    </Fragment>
  )
}

export default OurServices