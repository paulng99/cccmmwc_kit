import { createContext, FC } from "react";

export const AppContext = createContext({});

export const AppProvider:FC =({children})=>{
    return (
        <AppContext.Provider value={appStat, appDispatch}>
        {children}
        </AppContext.Provider>
    );
}