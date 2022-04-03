import { Fragment, useEffect, useState } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import Header, { IHeaderProps } from "containers/Main/Header";
import Footer from "containers/Main/Footer";
import Home from "./Home";
// import { controller } from "constants/defaultValues";
import AboutUs from "./AboutUs";
import NotFound from "./Error";
import ContactUs from "./ContactUs";
import FaqPage from "./FAQ";
import ErrorRoute from "routes/error";
import OurServices from "./OurServices";

const MainRoute = () => {

    const [header,setHeader] = useState<IHeaderProps['headerProps']>({
        color : "white"
    });

    const _fn = (headerProps:IHeaderProps['headerProps'])=>{
        setHeader(headerProps)
    }

    // useEffect(()=>{
    //     const _controller = controller({
    //         "login" : {
    //             method : "POST",
    //             url : "/login",
    //             data : {
    //                 username : "",
    //                 password : ""
    //             }
    //         }
    //     })

    //     _controller.output["login"].then(({data,errors,code}) => {
    //         if(code){
                
    //         }
    //     })

    //     return ()=>{
    //         _controller.cancel();   
    //     }

    // },[])
    return (
            <Routes>
                <Route path={"/"} element={
                <Fragment>
                    <Header headerProps={header}/>
                    <Outlet />
                    <Footer />
                </Fragment>} >
                    <Route index element={<Home />} />
                    <Route path="about-us" element={<AboutUs callbackHeader={_fn}/>} />
                    <Route path="404" element={<NotFound callbackHeader={_fn}/>} />
                    <Route path="contact-us" element={<ContactUs callbackHeader={_fn}/>} />
                    <Route path="FAQ" element={<FaqPage callbackHeader={_fn} />} />
                    <Route path="services" element={<OurServices callbackHeader={_fn} />} />
                </Route>
                <Route element={<ErrorRoute />} />
            </Routes>
    )
}

export default MainRoute;