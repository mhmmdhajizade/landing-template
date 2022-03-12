import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import useStyle from "./use-style";
import useLang, { IUseLang } from "./use-lang";
import {IUseStyle} from "typings/theme";

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface { }
}

type IProviderProps = {
    children: React.ReactNode;
}
interface ThemeInterface {
    style: IUseStyle,
    lang: IUseLang;
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.style.color['text']};
    background-color: ${props => props.theme.style.color['light']};
    font-family : ${props => props.theme.lang.dictionary['theme.locale'] === "fa-IR" ? "iransans" : "Roboto"}
  }
`
const CustomThemeProvider = ({ children }: IProviderProps) => {
    const style = useStyle();
    const lang = useLang();
    
    return (
        <ThemeProvider theme={{
            style,
            lang
        }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}
export default CustomThemeProvider;