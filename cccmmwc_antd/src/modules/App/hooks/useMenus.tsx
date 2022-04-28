import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { AppContext } from "../AppContext";
import { useGetAccess } from "./useAccess";

export default () => {
    const { appState, appDispatch } = useContext(AppContext);
    const [menus, setMenus] = useState<any>([]);
    const [tempMenus, setTempMenus] = useState({});
    const access = useGetAccess(appState.userInfo.email);


    const convertToMenus = () => {
        let m: { label: any; link: any; children: unknown; }[] = [];
        for (const [key, values] of Object.entries(tempMenus)) {
            console.log(tempMenus)
            getDoc(doc(db, 'modules', key)).then(o => {
                let d: any = o.data();
                m.push({
                    "label": d.menus.name_en,
                    "link": d.menus.link,
                    "children": values
                })
                console.log(m)
            }) 
        }
        setMenus(m)
    }

    useEffect(() => {
        setTempMenus(_.groupBy(access, x => x.module_id))
        convertToMenus();
    }, [access])
    console.log(menus)
    return menus;
}
