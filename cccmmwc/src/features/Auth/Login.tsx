import { IonButton, IonPage } from "@ionic/react"
import "./Login.css"

const Login = () => {
    const handleLogin=()=>{
        
    }

    return (
        <IonPage>
            <div className="loginPage"></div>
                <div >
                    <IonButton expand="block" className="content" size="large" onClick={handleLogin} >Google Login</IonButton>
                </div>
            
        </IonPage>
    )
}

export { Login }