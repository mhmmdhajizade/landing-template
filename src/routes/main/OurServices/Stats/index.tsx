import { Typography } from 'components/HtmlElements'
import React, { Fragment } from 'react'
import { StatsSec } from './style'

function Stats() {
  return (
    <Fragment>
      <StatsSec as="section" className='container'>
        <div className="headerSec">
          <Typography $fontSize='3.2rem'>Qualified trainers</Typography>
        </div>
        <div className='row'>
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-lg-6 col-12 progress">
                <div className="progressSec">
                  <div className="container number">
                    <Typography $fontSize='2.5rem'>35%</Typography>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 textSec">
                <div>
                  <Typography $fontSize='1.5rem'>Planning</Typography>
                  <Typography $fontSize='1.1rem' $textColor={{ name: "text", opacity: 0.5 }}>Lorem ipsum et dolor velit nec.</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-lg-6 col-12 progress">
                <div className="progressSec">
                  <div className="container number">
                    <Typography $fontSize='2.5rem'>75%</Typography>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-6 col-12 textSec">
                <div>
                  <Typography $fontSize='1.5rem'>Analysis</Typography>
                  <Typography $fontSize='1.1rem' $textColor={{ name: "text", opacity: 0.5 }}>Lorem ipsum et dolor velit nec.</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="row">
              <div className="col-lg-6 col-12 progress">
                <div className="progressSec">
                  <div className="container number">
                    <Typography $fontSize='2.5rem'>63%</Typography>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 textSec">
                <div>
                  <Typography $fontSize='1.5rem'>Develop</Typography>
                  <Typography $fontSize='1.1rem' $textColor={{ name: "text", opacity: 0.5 }}>Lorem ipsum et dolor velit nec.</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StatsSec>
    </Fragment>
  )
}

export default Stats