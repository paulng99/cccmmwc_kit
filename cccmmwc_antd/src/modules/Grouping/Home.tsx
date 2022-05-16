import { Route, Routes } from "react-router";
import Grouping from "./Grouping";
import Setup from "./Setup";
import UserGrouping from "./UserGrouping";

export const GroupingHome=()=>{
    return (
        <Routes>
            <Route path="/" element={<Grouping />} /> 
            <Route path="/user-grouping" element={<UserGrouping/>} /> 
            <Route path="/setup" element={<Setup />} /> 
        </Routes>
    );
}