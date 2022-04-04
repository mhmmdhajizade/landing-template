import React, { Fragment } from 'react'
import { AwardsSec } from './style'
import image from 'assets/img/AboutUs/p2-img-2.jpg'
import image2 from 'assets/img/AboutUs/h4-img-8.png'
import { Button, Typography } from 'components/HtmlElements'

function Awards() {
  return (
    <Fragment>
      <AwardsSec as="section" className='container-fluid'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 picSec">
              <img alt='' src={image} className='mainImg' />
              <div>
                <img src={image2} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12 textSec">
              <div className="container">
                <div className="textBox">
                  <div className="title">
                    <Typography $fontSize='3rem' className='mb-3' >
                      Award winning app for delivery
                    </Typography>
                  </div>
                  <div className="captionBox">
                    <div className="row">
                      <div className="col-lg-3 col-12 ">
                        <Typography $fontSize='1rem'>
                          Delivery
                        </Typography>
                      </div>
                      <div className="col-lg-9 col-12">
                        <Typography $fontSize='1.1rem' className='mb-5'>
                          Vivamus lacinia tempus rutrum nulla velit maximus consectetur, gravida tellus nibh faucibus euismod nisi curabitur.
                        </Typography>
                        <Button>
                          Read more
                          <div>
                            <i className="icon-right-arrow-7351 arrow"></i>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AwardsSec>
    </Fragment>

  )
}

export default Awards