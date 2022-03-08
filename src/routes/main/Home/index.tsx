import { Fragment } from "react";
import AppParts from "./Appsections";
import LogoSlider from "./LogoSlider";
import Markets from "./Markets";
import HomeSlider from "./Slider";

const Home = () => {
    return (
        <Fragment>
            <HomeSlider/>
            <LogoSlider />
            <Markets />
            <AppParts />
        </Fragment>

    )
}


export default Home;