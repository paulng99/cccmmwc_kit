import { useContext } from "react";
import { AppContext } from "./App/AppContext";

const Test = (prop: any) => {
    const { appState } = useContext(AppContext)
    return (
        <>
        </>
    );
}

export { Test }