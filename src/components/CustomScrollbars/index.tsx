import React, {Fragment} from "react";
import { Scrollbars, ScrollbarProps} from 'react-custom-scrollbars';
import styled from "styled-components";
import useTheme from "theme/use-theme";

interface IProps extends ScrollbarProps{
    renderThumbHide? : boolean,
    children : React.ReactNode,
}

const RenderThumbVertical = styled.div`
z-index: 99;
border-radius: 50px;
background-color: ${props => props.theme.style.getColor('light','darkest')};    
`



const CustomScrollbars = ({renderThumbHide,children,...otherProps} : IProps) =>{
    const {lang} = useTheme();
    const renderView = (props : any) => {
        if(lang['dictionary']['theme.dir'] === "rtl"){
            return (
                <div {...props} style={{...props.style , marginLeft: props.style.marginRight, marginRight: 0}}/>
            )
        }else{
            return (
                <div {...props} style={{...props.style}}/>
            )
        }
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return <Fragment>{children}</Fragment>;
    }

    const _renderThumbVertical = (props:any)=>{
        if(renderThumbHide) return <div/>
        return <RenderThumbVertical {...props}/>
    }

    return(
        <Scrollbars
            {...otherProps}
            renderView={renderView}
            // renderThumbVertical={_renderThumbVertical renderThumbHide ? ()=> <div/> : (props) => (<div {...props} className={styles['renderThumbVertical']} style={{ ...props.style}} /> )}
            renderThumbVertical={_renderThumbVertical}
        >
            {children}
        </Scrollbars>
    )
}

export default CustomScrollbars;