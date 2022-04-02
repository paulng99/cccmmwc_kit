import { IAppState } from "./AppContext";

export enum AppActionType {
    LOADING = "LOADING",
    USERINFO = "USERINFO",
}

interface IAppAction {
    type: string,
    payload: object
}



export const appReducer: any = (state: IAppState, action: IAppAction) => {
    switch (action.type) {
        case AppActionType.LOADING:
            return {

                ...state, "isLoading": action.payload
            };

        case AppActionType.USERINFO:
            return { state }

        default:
            return { state };
    }
}
