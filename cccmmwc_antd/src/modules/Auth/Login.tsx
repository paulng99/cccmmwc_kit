import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { auth } from "../../services/firebase";
import { AppContext } from "../App/AppContext";
import './Login.css'

export default () => {
    const a=useContext(AppContext);

    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then(result=>{
            console.log(result.user)

            console.log(a)

        }).catch((e)=>{
            console.log(e);
        });
    }

    return (
        <div id="login">
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}