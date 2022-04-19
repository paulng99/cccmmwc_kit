import aes from 'crypto-js/aes';

export interface IAppAction {
    type: any;
    payload?: any;
}

export default (appState: any, appAction: IAppAction) => {
    const { type, payload } = appAction;

    switch (type) {
        case "LOADING":
            return { ...appState, "loading": payload };

        case "LOGIN":
           return { ...appState, "userInfo": payload };

        case "LOGOUT":
            return {};
    }
}
