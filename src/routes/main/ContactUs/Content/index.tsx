import React, { Fragment } from 'react'
import img from 'assets/img/ContactUs/p7-img-1.jpg'
import { ContentSec } from './style'
import { Button, Typography } from 'components/HtmlElements'
import { Input } from 'components/HtmlElements/Form'

function Content() {
  return (
    <Fragment>
      <ContentSec as="section" className='container'>
        <div className="row">
          <div className="col-lg-6 col-12">
            <img alt='' src={img} />
            <div className='contactData'>
              <Typography $fontSize='1.5rem'>
                Our office in London
              </Typography>
              <Typography $fontSize='1.1rem'>
                London +(123) 456 -7890
              </Typography>
              <Typography $fontSize='1.1rem'>
                webon01@qodeinteractive.com
              </Typography>
              <Typography $fontSize='1.1rem'>
                9 North Road
              </Typography>
            </div>
          </div>
          <div className="col-lg-6 col-12 formSec">
            <div className="formBox">
              <div className="formTitle">
                <Typography $fontSize='3rem'>
                  Post a Comment
                </Typography>
                <Typography $fontSize='1.1rem'>
                  Ne vim tamquam verterem elaboraret, delectus senserit conceptam ut sed, nec sanctus consulatu no, sea alterum.
                </Typography>
              </div>
              <div className="formInputs">
                <Input className='Inputs' placeholder='Name' />
                <Input type="email" className='Inputs' placeholder='Email' />
                <textarea rows={5} className='Inputs' placeholder='Message' />
              </div>
              <Button>
                Send message
                <i className="icon-right-arrow-7351 arrow"></i>
              </Button>
            </div>
          </div>
        </div>
      </ContentSec>
    </Fragment>
  )
}

export default Content