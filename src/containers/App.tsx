import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import MainRoute from "routes/main";

export const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path={"*"} element={<MainRoute />}/>
            </Routes>
        </Fragment>
    )
}


export default App;