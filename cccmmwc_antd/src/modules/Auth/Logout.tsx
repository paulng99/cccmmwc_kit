import { signOut } from "firebase/auth";
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router";
import { auth } from "../../services/firebase";
import { AppContext } from "../App/AppContext";

export default ()=>{

    const navigate = useNavigate();
    const {appState, appDispatch}=useContext(AppContext);

    useEffect(()=>{
        signOut(auth).then(()=>{
            localStorage.clear();
            appDispatch({
                "type":"LOGOUT",
            });
            console.log("logout.")
            navigate("/login")
        });
    },[]);


    return (
        <>Logout</>
    )
}