import { signOut } from "firebase/auth";
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router";
import { auth } from "../../services/firebase";
import { AppContext } from "../App/AppContext";

export default () => {

    const navigate = useNavigate();

    useEffect(() => {
        signOut(auth).then(() => {
            localStorage.clear();
            console.log("logout.")
            navigate("/auth/login")
        });
    }, []);


    return (
        <>Logout</>
    )
}