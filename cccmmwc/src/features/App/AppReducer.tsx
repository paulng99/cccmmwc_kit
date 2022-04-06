import { IAppState } from "./AppContext";

export enum AppActionType {
    LOADING = "LOADING",
    USERINFO = "USERINFO",
    GROUPS = "GROUPS"
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
            return {
                ...state,
                "userInfo": action.payload
            }

        case AppActionType.GROUPS:
            return {
                ...state,
                "groups": action.payload
            }
        default:
            return { state };
    }
}
