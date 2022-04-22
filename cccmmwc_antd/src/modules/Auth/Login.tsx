import { Button } from "antd";
import { AES, enc } from "crypto-js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { getHashPasscode } from "../../config/hashpasswcode";
import { auth } from "../../services/firebase";
import { AppContext } from "../App/AppContext";
import './Login.css'


export default () => {
    const navigate=useNavigate();
    const {appState, appDispatch} = useContext(AppContext);
    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then(async result => {
            appDispatch({
                "type": "LOGIN",
                "payload": result.user,
            })
            localStorage.setItem("appState",AES.encrypt(JSON.stringify(appState),getHashPasscode()).toString());
            console.log(AES.decrypt(localStorage.getItem("appState")||"",getHashPasscode(),enc.Utf8).toString())
            //navigate('/test')
        }).catch((e) => {
            console.log("error",e);
        });
    }

    return (
        <div id="login">
            {/* {console.log(JSON.parse(enc.Utf8.stringify(AES.decrypt(localStorage.getItem("appState")||"",hashpasscode))))} */}
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}