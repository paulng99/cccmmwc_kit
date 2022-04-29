import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";
import { useGetAccess } from "./useAccess";

export default () => {
    const [menus, setMenus] = useState<any>();
    const userInfo = JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))) || ""
    const email = userInfo.email
    const access = useGetAccess(email);
    let m: { label: any; link: any; children: unknown; }[] = [];
    let tempMenus = _.groupBy(access, x => x.module_id);

    useEffect(() => {
        for (const [key, values] of Object.entries(tempMenus)) {
            getDoc(doc(db, 'modules', key)).then(o => {
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
