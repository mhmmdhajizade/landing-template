import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import ErrorRoute from "routes/error";
import MainRoute from "routes/main";

const BASE_URL = "";

export const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path={BASE_URL+"/"} element={<MainRoute />} />
                <Route element={<ErrorRoute />} />
            </Routes>
        </Fragment>
    )
}


export default App;