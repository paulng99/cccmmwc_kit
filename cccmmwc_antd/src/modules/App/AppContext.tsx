import { createContext, FC } from "react";

export const initialAppState ={
    userInfo:{},
    loading:false
}

export const AppContext = createContext(initialAppState);

export const AppProvider:FC =({children})=>{
    return (
        <AppContext.Provider value={appState, appDispatch}>
        {children}
        </AppContext.Provider>
    );
}