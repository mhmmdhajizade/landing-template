import styled from "styled-components";

export const NotFoundSec = styled.div`
    background-color: #f7f7f7;
    
    margin-bottom: -70px;
    .container{
        padding-top: 100px;
        img{
            width: 100%;
        }
        .textSection{
            display: flex;
            align-items: center;
            .smText{
                margin-bottom: -10px;
                letter-spacing: 3px;
            }
            .description{
                padding-right: 85px;
            }
            button{
                padding: 10px 50px;
            }
        }
    }
`