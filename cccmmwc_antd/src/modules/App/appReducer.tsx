import { AES, enc } from "crypto-js";
import { getHashPasscode } from "../../config/hashpasswcode";
import { initialAppState } from "./AppContext";

export interface IAppAction {
    type: any;
    payload?: any;
}

export default (appState: any, appAction: IAppAction) => {
    const { type, payload } = appAction;

    switch (type) {
        case "LOADING":
            return { ...appState, "loading": payload };
    }
}


