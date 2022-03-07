import { Button, Typography } from "components/HtmlElements";
import { Fragment } from "react";
import styled from "styled-components";
import { Slider } from "./style";



const HomeSlider = () => {
    return (
        <Fragment>
            <Slider>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">

                        </div>
                        <div className="col-lg-5 col-12">
                            <Typography
                                $textColor={{ name: 'white' }}
                                $fontSize="0.8rem"
                            >
                                THE ESSENTIAL
                            </Typography>
                            <Typography
                                $textColor={{ name: 'white' }}
                                $fontSize="3rem"
                            >
                                We let kids <br />learn all while<br /> having fun
                            </Typography >
                            <Button 
                            $bgColor={{name: 'white'}}
                            $textColor={{name: 'black'}}
                            >View more</Button>
                        </div>
                    </div>
                </div>
            </Slider>
        </Fragment>
    )
}


export default HomeSlider;