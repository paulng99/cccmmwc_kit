import { AES, enc } from "crypto-js";
import { createContext, FC, useEffect, useReducer } from "react";
import { getHashPasscode } from "../../config/hashpasswcode";
import appReducer, { IAppAction } from "./appReducer";

export const initialAppState = {
    userInfo: {},
    loading: false
}

export const AppContext = createContext<{
    appState: typeof initialAppState;
    appDispatch: (action: IAppAction) => void;
}>({
    appState: initialAppState,
    appDispatch: () => { },
});

export const AppProvider: FC = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialAppState)

    const getAppState=async ()=>{
        let appLocalEncrypt = localStorage.getItem("appState");
        let appLocalDecrypt = enc.Utf8.stringify(AES.decrypt(appLocalEncrypt!, getHashPasscode()));
        appLocalDecrypt && console.log(JSON.parse(appLocalDecrypt))
        return JSON.parse(appLocalDecrypt);
    }

    useEffect(() => {
        appDispatch({
            "type": "INITIAL_APP",
            "payload": getAppState(),
        })
    }, []);


    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    );
} 