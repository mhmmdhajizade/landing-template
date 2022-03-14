import { Fragment } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import ErrorRoute from "routes/error";
import MainRoute from "routes/main";
import Header from "containers/Main/Header";
import Footer from "containers/Main/Footer";
import Home from "routes/main/Home";
import AboutUs from "routes/main/AboutUs";
import NotFound from "routes/main/Error";
import ContactUs from "routes/main/ContactUs";

const BASE_URL = "";

export const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path={BASE_URL+"/"} element={
                <Fragment>
                    <Header />
                    <Outlet />
                    <Footer />
                </Fragment>} >
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/NotFound" element={<NotFound />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                </Route>
                <Route element={<ErrorRoute />} />
            </Routes>
        </Fragment>
    )
}


export default App;