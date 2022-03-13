import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import useStyle from "./use-style";
import useLang, { IUseLang } from "./use-lang";
import { IUseStyle } from "typings/theme";

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
    @font-face {
    font-family: "DmSans";
    src: url("./assets/fonts/textFonts/DMSans-Bold.ttf");
}
@font-face {
    font-family: "Samim";
    src: url("./assets/fonts/textFonts/Samim-Medium.ttf");
}
  body {
    color: ${props => props.theme.style.getColor('text')};
    background-color: ${props => props.theme.style.getColor('light')};
    font-family : ${props => props.theme.lang.dictionary['theme.langLabel'] === "fa" ? "Samim" : "DmSans"}
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