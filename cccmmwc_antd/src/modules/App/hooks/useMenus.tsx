import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { useGetAccess } from "./useAccess";

export default () => {
    const [menus, setMenus] = useState<any>();
    const access = useGetAccess();
    let m: { label: any; link: any; children: unknown; }[] = [];
    let tempMenus = _.groupBy(access, x => x.module_id);

    useEffect(() => {
        for (const [key, values] of Object.entries(tempMenus)) {
            getDoc(doc(db, 'modules', key)).then(o => {
                console.log("using firestore in menus: ",o.data())

                let d: any = o.data();
                m.push({
                    ...d,
                    "children": values
                })
            }).then(() => {
                setMenus(m)
            })
        }
    }, [access])

    useEffect(() => {
        localStorage.setItem("menus", JSON.stringify(menus))
    }, [menus])

    return menus;
}
