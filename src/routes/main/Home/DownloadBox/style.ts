import styled from "styled-components";

export const DownloadBoxSec = styled.div`
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
            p{
                ${props => props.theme.lang.dictionary["theme.langLabel"]=== "fa" && "text-align:right;"}

            }
            .icons{
                &:before{
                    font-size: 2.5rem;
                    margin: 0;
                    ${props => props.theme.lang.dictionary["theme.langLabel"]=== "en" && "margin-right: 10px;"}
                    ${props => props.theme.lang.dictionary["theme.langLabel"]=== "fa" && "margin-left: 10px;"}
                }
            }
            .smaller{
                margin-bottom: -7px;
            }
        }
        p{
            margin: 0;
            text-align: left;
            padding: 0;
        }
    }
    
`