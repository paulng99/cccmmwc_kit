import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useInRouterContext, useLocation, useMatch, useNavigate, useOutlet, useOutletContext, useRoutes } from "react-router";
import _ from "underscore";
import { auth } from "../../services/firebase";
import { encryptData } from "../../utils/encrypto";
import { AppContext } from "../App/AppContext";
import { useCheckAccessLink } from "../App/hooks/useAccess";
import useGroups from "../App/hooks/useGroups";
import './Login.css'


export default () => {
    const { setEmail } = useGroups();
    const navigate = useNavigate();
    const cal=useCheckAccessLink();
    console.log(cal)
    const { appState, appDispatch } = useContext(AppContext);
    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        appDispatch({
            "type": "LOADING",
            "payload": true,
        })
        signInWithPopup(auth, googleProvider).then(async result => {
            localStorage.setItem("userInfo", encryptData(result.user))
            setEmail(result.user.email)
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