import { IonButton, IonPage } from "@ionic/react"
import { MouseEvent, useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { AppContext } from "../App/AppContext"
import { AppActionType } from "../App/AppReducer"
import "./Login.css"
import { useGetUserGroups } from "./hooks/getUserGroups"
import { googleSigin, googleSignout } from "./services/googleSigin"
import { hashpasscode } from "../../configs/hashpasscode"
import AES from "crypto-js/aes"

const Login = () => {
    const history = useHistory();
    const { appState, appDispatch } = useContext(AppContext);
    const { groups, setEmail } = useGetUserGroups();

    const handleLogin = (event: MouseEvent<HTMLElement>) => {
        googleSigin().then((r) => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": r,
            });
            setEmail(r?.email || "");
            return r;
        }).then((r) => {
            const hashGroups=AES.encrypt(JSON.stringify(groups),hashpasscode)
            localStorage.setItem("groups", hashGroups.toString());
            appDispatch({ "type": "GROUPS", "payload": groups });
            history.push("/dashboard")
        });
    }

    return (
        <IonPage>
            <div className="loginPage"></div>
            <div className="content">
                <IonButton expand="block" size="large" onClick={handleLogin} >Google Login</IonButton>
            </div>
        </IonPage>
    )
}

const Logout = () => {
    const { appDispatch } = useContext(AppContext);
    const handleLogout = () => {
        googleSignout().then(() => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": {},
            });
        });
    }

    useEffect(() => {
        handleLogout();
    });

    return (<></>);
}



export { Login, Logout }