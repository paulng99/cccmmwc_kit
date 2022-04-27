import { useContext, useEffect, useState } from "react";
import _ from "underscore";
import { AppContext } from "../AppContext";
import { useGetAccess } from "./useAccess";

export default () => {
    const {appState, appDispatch} = useContext(AppContext);
    const [menus, setMenus] = useState<any>([]);
    const access = useGetAccess(appState.userInfo.email);


    useEffect(() => {
        setMenus(_.groupBy(access, x=>x.module_id))
    }, [access])
    console.log(menus)
    return menus;
}