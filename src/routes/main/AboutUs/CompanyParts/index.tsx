import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { CompanyPartsSec } from './style'

function CompanyParts() {
  return (
    <Fragment>
      <CompanyPartsSec as="section" className='container mb-5'>
        <div className="title">
          <div className="row">
            <div className="col-lg-5 col-12">
              <Typography $fontSize='2.8rem'>
                All the people behind the latest project
              </Typography>
            </div>
          </div>
        </div>
        <div className="parts">
          <div className="row">
            <div className="col-lg-3 col-12">
              <i className='icon-icon1 icons' />
              <div className="descBox ">
                <Typography $fontSize='1.5rem'>
                  Capitalize on Custom
                </Typography>
                <Typography $fontSize='1.1rem'>
                  Lorem ipsum dolor sit amet, sit te magna aperiam.
                </Typography>
                <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
              </div>
            </div>
            <div className="col-lg-3 col-12 even">
              <i className='icon-icon2 icons' />
              <div className="descBox ">
                <Typography $fontSize='1.5rem'>
                  eCommerce Trends
                </Typography>
                <Typography $fontSize='1.1rem'>
                  Lorem ipsum dolor sit amet, sit te magna aperiam.
                </Typography>
                <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <i className='icon-icon3 icons' />
              <div className="descBox ">
                <Typography $fontSize='1.5rem'>
                  On-Demand Platform
                </Typography>
                <Typography $fontSize='1.1rem'>
                  Lorem ipsum dolor sit amet, sit te magna aperiam.
                </Typography>
                <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
              </div>
            </div>
            <div className="col-lg-3 col-12 even">
              <i className='icon-icon4 icons ' />
              <div className="descBox ">
                <Typography $fontSize='1.5rem'>
                  2022 Growth Trends
                </Typography>
                <Typography $fontSize='1.1rem'>
                  Lorem ipsum dolor sit amet, sit te magna aperiam.
                </Typography>
                <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CompanyPartsSec>
    </Fragment>
  )
}

export default CompanyParts