import { Route, Routes } from "react-router";
import Grouping from "./Grouping";
import Setup from "./Setup";

export const GroupingHome=()=>{
    return (
        <Routes>
            <Route path="/" element={<Grouping />} /> 
            <Route path="/setup" element={<Setup />} /> 
        </Routes>
    );
}