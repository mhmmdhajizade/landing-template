import { Fragment } from "react";
import AppParts from "./Appsections";
import AppTools from "./AppTools";
import Comments from "./Comment";
import DownloadBox from "./DownloadBox";
import AppFeatures from "./Features";
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
            <AppTools />
            <Comments />
            <AppFeatures />
            <DownloadBox />
        </Fragment>

    )
}


export default Home;