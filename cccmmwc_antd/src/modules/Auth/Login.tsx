import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { useNavigate } from "react-router";
import _ from "underscore";
import { auth, db } from "../../services/firebase";
import { encryptData } from "../../utils/encrypto";
import { AppContext } from "../App/AppContext";
import './Login.css'
import { getAccess } from "../../utils/getAccess";
import getMenus from "../../utils/getMenus";


export default () => {
    const navigate = useNavigate();
    const { appState, appDispatch } = useContext(AppContext);

    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        let g: any[];
        appDispatch({
            "type": "LOADING",
            "payload": true,
        })
        signInWithPopup(auth, googleProvider).then(async result => {
            localStorage.setItem("userInfo", encryptData(result.user));
            console.log(auth.currentUser)
            //setDoc(doc(db, "users", result.user.email || ""), {"userInfo":result.user})
            getDoc(doc(db, "users", result.user.email || "")).then(d => {
                localStorage.setItem("groups", JSON.stringify(d.data()?.groups))
                g = d.data()?.groups;
                getAccess(g);
            }).then(() => {
                setTimeout(() => { getMenus(); }, 1000)
            }).then(() => {
                navigate('/test')
            })
            appDispatch({
                "type": "LOADING",
                "payload": false,
            })
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