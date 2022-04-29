import { useContext, useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard";
import { AppContext } from "../App/AppContext";

export const Test = () => {
    const { appState, appDispatch } = useContext(AppContext)
    const [data, setData] = useState({});
console.log(appState)
    useEffect(() => {
        setData(appState)
    }, [appState]);

    return (
        <Dashboard>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </Dashboard>
    )
}

