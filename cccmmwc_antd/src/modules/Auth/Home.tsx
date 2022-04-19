import { Route, Routes } from "react-router";
import Login from "./Login";
import Logout from "./Logout";
import { AuthSetup } from "./Setup";

export const AuthHome=()=>{
    return (
        <Routes>
            <Route path="/setup" element={<AuthSetup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
}