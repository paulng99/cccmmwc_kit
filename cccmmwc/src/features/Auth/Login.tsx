import { IonButton, IonPage } from "@ionic/react"
import { MouseEvent, useContext, useEffect } from "react"
import { AppContext } from "../App/AppContext"
import { AppActionType } from "../App/AppReducer"
import "./Login.css"
import { useGetUserGroups } from "./hooks/getUserGroups"
import { googleSigin, googleSignout } from "./services/googleSigin"
import { hashpasscode } from "../../configs/hashpasscode"
import AES from "crypto-js/aes"
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();
    const { appState, appDispatch } = useContext(AppContext);
    const { groups, setEmail } = useGetUserGroups();

    useEffect(() => {
        const hashGroups = AES.encrypt(JSON.stringify(groups), hashpasscode)
        localStorage.setItem("groups", hashGroups.toString());
        appDispatch({ "type": "GROUPS", "payload": groups });
    }, [groups]);

    const handleLogin = (event: MouseEvent<HTMLElement>) => {
        googleSigin().then((r) => {
            appDispatch({
                "type": AppActionType.USERINFO,
                "payload": r,
            });
            setEmail(r?.email || "");
            history.push("/dashboard");
        })
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
export { Login}