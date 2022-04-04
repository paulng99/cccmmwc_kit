import { IonButton, IonPage } from "@ionic/react"
import { MouseEvent, useContext, useEffect } from "react"
import { Redirect, useHistory } from "react-router"
import { AppContext } from "../App/AppContext"
import { AppActionType } from "../App/AppReducer"
import "./Login.css"
import { googleSigin, googleSignout } from "./services/googleSigin"

const Login = () => {
    const history = useHistory();
    const { appState, appDispatch } = useContext(AppContext);
    const handleLogin = (event: MouseEvent<HTMLElement>) => {
        googleSigin().then((r) => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": r,
            });
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
    const {appDispatch } = useContext(AppContext);
    const handleLogout = () => {
        googleSignout().then(() => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": {},
            });
        });
    }

    useEffect(()=>{
        handleLogout();
    });

    return (<></>);
}



export { Login, Logout }