import { Fragment, useEffect } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from "containers/Main/Header";
import Footer from "containers/Main/Footer";
import Home from "./Home";
import { controller } from "constants/defaultValues";
const MainRoute = () => {

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
            <Route path="/" element={
                <Fragment>
                    <Header />
                    <Outlet />
                    <Footer />
                </Fragment>
            }>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default MainRoute;