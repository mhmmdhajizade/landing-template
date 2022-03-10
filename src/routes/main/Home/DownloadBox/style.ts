import styled from "styled-components";

export const DownloadBoxSec = styled.div`
    background-color: white;
    margin-top: 70px;
    display: flex;
    .row{
        align-items: center;
    }
    #rightCol{
        text-align: center;
    }
    .downloadBtn{
        display: flex;
        margin-top: 20px;
        button{
            display: flex;
            margin: 5px;
            align-items: center;
            vertical-align: middle;
            .icons{
                &:before{
                    font-size: 2.5rem;
                    margin: 0;
                    margin-right: 10px;
                }
            }
            .smaller{
                margin-bottom: -10px;
            }
        }
        p{
            margin: 0;
            text-align: left;
            padding: 0;
        }
    }
    
`