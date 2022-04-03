import { IHeaderProps } from 'containers/Main/Header'
import React, { Fragment, useEffect } from 'react'
import Content from './Content'
import MainSlide from './MianSlide'


interface IProps {
  callbackHeader?: (headerProps: IHeaderProps['headerProps']) => void
}

function ContactUs({ callbackHeader }: IProps) {
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
        <MainSlide />
        <Content />
    </Fragment>
  )
}

export default ContactUs