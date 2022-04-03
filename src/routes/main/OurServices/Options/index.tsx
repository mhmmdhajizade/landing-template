import { Button, Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { OptionsSec } from './style'

function Options() {
  return (
    <Fragment>
      <OptionsSec as="section" className='container'>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="icon">
              <i className='icon-icon1 icons' />
            </div>
            <div className="textBox">
              <Typography $fontSize='1.5rem'>Capitalize on Custom</Typography>
              <Typography $textColor={{name:"text" , opacity: 0.6}} $fontSize='1.1rem'>In stet ceteros sit, pri at possim meis audiam tibique, meis velit percipit duo eu nostro.</Typography>
              <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="icon">
              <i className='icon-icon3 icons' />
            </div>
            <div className="textBox">
              <Typography $fontSize='1.5rem'>On-Demand Platforms</Typography>
              <Typography $textColor={{name:"text" , opacity: 0.6}} $fontSize='1.1rem'>In stet ceteros sit, pri at possim meis audiam tibique, meis velit percipit duo eu nostro.</Typography>
              <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="icon">
              <i className='icon-icon2 icons' />
            </div>
            <div className="textBox">
              <Typography $fontSize='1.5rem'>eCommerce Trends</Typography>
              <Typography $textColor={{name:"text" , opacity: 0.6}} $fontSize='1.1rem'>In stet ceteros sit, pri at possim meis audiam tibique, meis velit percipit duo eu nostro.</Typography>
              <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="icon">
              <i className='icon-icon4 icons' />
            </div>
            <div className="textBox">
              <Typography $fontSize='1.5rem'>2022 Growth Trends</Typography>
              <Typography $textColor={{name:"text" , opacity: 0.6}} $fontSize='1.1rem'>In stet ceteros sit, pri at possim meis audiam tibique, meis velit percipit duo eu nostro.</Typography>
              <Button>
                  Read more
                  <i className="icon-right-arrow-7351 arrow"></i>
                </Button>
            </div>
          </div>
        </div>
      </OptionsSec>
    </Fragment>
  )
}

export default Options