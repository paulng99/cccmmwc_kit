import { signOut } from "firebase/auth";
import { useEffect } from "react"
import { useNavigate } from "react-router";
import { auth } from "../../services/firebase";

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