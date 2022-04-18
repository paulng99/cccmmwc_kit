import { signOut } from "firebase/auth";
import { useEffect } from "react"
import { auth } from "../../services/firebase";

export default ()=>{
    useEffect(()=>{
        signOut(auth).then(()=>{
            console.log("logout.")
        });
    },[]);


    return (
        <>Logout</>
    )
}