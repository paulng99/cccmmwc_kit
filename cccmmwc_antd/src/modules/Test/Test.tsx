import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router";
import Dashboard from "../../layouts/Dashboard/Dashboard";
import canAction from "../../utils/canAction";
import { AppContext } from "../App/AppContext";

export const Test = () => {
    const { appState, appDispatch } = useContext(AppContext)
    const {pathname}=useLocation()
    const [data, setData] = useState<any>();

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("menus")||""))
        console.log(canAction("add", pathname));
    }, [appState]);

    return (
        <Dashboard>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </Dashboard>
    )
}

