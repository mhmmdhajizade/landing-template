import styled from "styled-components";

export const NotFoundSec = styled.div`
    background-color: #f7f7f7;
    
    margin-bottom: -70px;
    .container{
        padding-top: 100px;
        padding-bottom: 100px;
        img{
            width: 100%;
        }
        .textSection{
            display: flex;
            align-items: center;
            .smText{
                margin-bottom: -5px;
                letter-spacing: 3px;
            }
            .description{
                padding-right: 85px;
            }
            button{
                margin-top: 30px;
                padding: 10px 50px;
            }
        }
    }
`