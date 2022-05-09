import { Spin } from "antd";
import { createContext, FC, useReducer } from "react";
import appReducer, { IAppAction } from "./appReducer";

export const initialAppState = {
    loading: false,
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
    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            <Spin spinning={appState.loading}>
                {children}
            </Spin>
        </AppContext.Provider>
    );
} 