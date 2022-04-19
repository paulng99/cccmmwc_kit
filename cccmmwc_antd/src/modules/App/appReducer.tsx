import aes from 'crypto-js/aes';

export interface IAppAction {
    type: any;
    payload: any;
}

export default (appState: any, appAction: IAppAction) => {
    const { type, payload } = appAction;

    switch (type) {
        case "LOADING":
            return { ...appState, "loading": payload };

        case "LOGIN":
            saveLocalStorage("123");
            return { ...appState, "userInfo": payload };
    }
}


const saveLocalStorage = (payload: any) => {
    console.log(aes.encrypt(payload, "112233").toString());
}