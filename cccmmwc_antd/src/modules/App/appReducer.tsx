import { AES, enc } from "crypto-js";
import { getHashPasscode } from "../../config/hashpasswcode";

export interface IAppAction {
    type: any;
    payload?: any;
}

export default (appState: any, appAction: IAppAction) => {
    const { type, payload } = appAction;

    switch (type) {
        case "LOADING":
            return { ...appState, "loading": payload };

        case "INITIAL_APP":
            return getAppState();

        case "LOGIN":
            encryptoStateToLocalStorage({ ...appState, "userInfo": payload });
            console.log({ ...appState, "userInfo": payload })
            return { ...appState, "userInfo": payload };

        case "LOGOUT":
            return null;
    }
}

const encryptoStateToLocalStorage = async (state: any) => {
    let encryptoState = AES.encrypt(JSON.stringify(state), getHashPasscode()).toString();
    localStorage.setItem("appState", encryptoState);
}

const getAppState = () => {
    if (localStorage.getItem("appState") != null) {
        let decryptoState = AES.decrypt(localStorage.getItem("appState")!, getHashPasscode()).toString(enc.Utf8);
        console.log(JSON.parse(decryptoState))
        return JSON.parse(decryptoState);
    }else{
        return null;
    }
}

