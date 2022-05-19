import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router";
import Dashboard from "../../layouts/Dashboard/Dashboard";
import canAction from "../../utils/canAction";
import { AppContext } from "../App/AppContext";
import useUserGroups from "../Grouping/hooks/useUserGroups";

export const Test = () => {
    const { appState, appDispatch } = useContext(AppContext)
    const {pathname}=useLocation()
    const [data, setData] = useState({});
    const {userGroups}=useUserGroups()
    useEffect(() => {
        setData(appState)
        console.log(canAction("add", pathname));
    }, [appState]);

    return (
        <Dashboard>
            <pre>{JSON.stringify(userGroups, undefined, 2)}</pre>
        </Dashboard>
    )
}

