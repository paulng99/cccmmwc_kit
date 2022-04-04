import { useContext } from "react";
import { AppContext } from "./App/AppContext";
import { register } from "./Auth/services/register";

const Test = (prop: any) => {
    const { appState } = useContext(AppContext)
    register(appState.userInfo).then((b) => {
        console.log(b)
    })
    return (
        <>
        </>
    );
}

export { Test }