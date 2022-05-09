import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import _ from "underscore";
import { auth } from "../../services/firebase";
import { encryptData } from "../../utils/encrypto";
import { AppContext } from "../App/AppContext";
import useGroups from "../App/hooks/useGroups";
import './Login.css'


export default () => {
    const navigate = useNavigate();
    const { appState, appDispatch } = useContext(AppContext);
    const { groups, setEmail } = useGroups();

    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        appDispatch({
            "type": "LOADING",
            "payload": true,
        })
        signInWithPopup(auth, googleProvider).then(async result => {
            localStorage.setItem("userInfo", encryptData(result.user))
            console.log("email: ", result.user.email)
            setEmail(result.user.email)
            console.log("userInfo: ", result.user)
            appDispatch({
                "type": "LOADING",
                "payload": false,
            })
            navigate('/test')
        }).catch((e) => {
            appDispatch({
                "type": "LOADING",
                "payload": false
            })
            console.log("error", e);
        });
    }

    return (
        <div id="login">
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}