import { Route, Routes } from "react-router";
import Grouping from "./Grouping";

export const GroupingHome=()=>{
    return (
        <Routes>
            <Route path="/" element={<Grouping />} /> 
        </Routes>
    );
}