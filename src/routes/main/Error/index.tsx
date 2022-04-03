import React, { Fragment, useEffect } from 'react'
import { NotFoundSec } from './style'
import img from 'assets/img/NotFound/p11-img-1.png'
import { Button, Typography } from 'components/HtmlElements'
import { IHeaderProps } from 'containers/Main/Header'

interface IProps {
    callbackHeader?: (headerProps: IHeaderProps['headerProps']) => void
  }

function NotFound({ callbackHeader }: IProps) {

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
            <NotFoundSec as="section" className='container-fluid'>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-lg-6 col-12 textSection">
                            <div className='textBox'>
                                <Typography className='smText' $fontSize='0.7rem'>SORRY, THE PAGE NOT FOUND</Typography>
                                <Typography $fontSize='4rem' className='mb-3'>Error page 404</Typography>
                                <Typography $fontSize='1.2rem' className='description mb-5'>
                                    The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
                                </Typography>
                                <Button $bgColor={{ name:'black'}} $textColor={{name: 'white'}}>Back to home</Button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img alt='' src={img} />
                        </div>
                    </div>
                </div>
            </NotFoundSec>
        </Fragment>
    )
}

export default NotFound