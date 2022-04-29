import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../services/firebase";
import { encryptData } from "../../utils/encrypto";
import { AppContext } from "../App/AppContext";
import './Login.css'


export default () => {
    const navigate=useNavigate();
    const {appState, appDispatch} = useContext(AppContext);
    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then(async result => {
            localStorage.setItem("userInfo", encryptData(result.user))
            navigate('/test')
        }).catch((e) => {
            console.log("error",e);
        });
    }

    return (
        <div id="login">
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}