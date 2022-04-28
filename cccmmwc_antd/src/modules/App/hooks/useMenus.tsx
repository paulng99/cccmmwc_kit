import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { AppContext } from "../AppContext";
import { useGetAccess } from "./useAccess";

export default () => {
    const { appState, appDispatch } = useContext(AppContext);
    const [menus, setMenus] = useState<any>();
    const access = useGetAccess(appState.userInfo.email);
    let m: { label: any; link: any; children: unknown; }[] = [];
    let tempMenus = _.groupBy(access, x => x.module_id);

    useEffect(() => {
        for (const [key, values] of Object.entries(tempMenus)) {
            getDoc(doc(db, 'modules', key)).then(o => {
                let d: any = o.data();
                m.push({
                    "label": d.menus.name_en,
                    "link": d.menus.link,
                    "children": values
                })
            }).then(()=>{
                setMenus(m)
            })
        }
    }, [access])

    useEffect(() => {
        localStorage.setItem("menus", JSON.stringify(menus))
    }, [menus]) 

    return menus;
}
