import { useContext, useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard";
import { AppContext } from "../App/AppContext";
import useMenus from "../App/hooks/useMenus";

export const Test = () => {
    const { appState, appDispatch } = useContext(AppContext)
    const [data, setData] = useState({});
    const menus = useMenus();

    useEffect(() => {
        console.log(appState.userInfo.email)
        setData(menus);
    }, [appState]);

    return (
        <Dashboard>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </Dashboard>
    )
}

