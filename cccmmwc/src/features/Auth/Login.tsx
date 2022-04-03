import { IonButton, IonPage } from "@ionic/react"
import { MouseEvent, useContext } from "react"
import { AppContext } from "../App/AppContext"
import { AppActionType } from "../App/AppReducer"
import "./Login.css"
import { googleSigin, googleSignout } from "./services/googleSigin"

const Login = () => {
    const { appState, appDispatch } = useContext(AppContext);
    const handleLogin = (event: MouseEvent<HTMLElement>) => {
        googleSigin().then((r) => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": r,
            });
        });
    }
    const handleLogout = () => {
        googleSignout().then(() => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": {},
            });
        });
    }
    return (
        <IonPage>
            <div className="loginPage"></div>
            <div className="content">
                <IonButton expand="block"  size="large" onClick={handleLogin} >Google Login</IonButton>
                <IonButton expand="block"  size="large" onClick={handleLogout} >Google Logout</IonButton>
            </div>

        </IonPage>
    )
}


export { Login }