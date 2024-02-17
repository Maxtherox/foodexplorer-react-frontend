import { Routes, Route } from "react-router-dom";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Edit } from "../pages/Edit";
import { Details } from "../pages/Details";
import { NotFound } from '../pages/NotFound';

export function AdminRoutes(){
    return(
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/new" element={<New />}/>
            <Route  path="/edit" element={<Edit />}/>
            <Route  path="/details/:id" element={<Details />}/>

            <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
    )
}