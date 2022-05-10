import { doc, getDoc } from "firebase/firestore";
import _ from "underscore";
import { db } from "../services/firebase";
import { decryptDataToString } from "./encrypto";

export default () => {
    let access=JSON.parse(decryptDataToString(localStorage.getItem("access")))
    let m: { label: any; link: any; children: unknown; }[] = [];
    let tempMenus = _.groupBy(access, x => x.module_id);

    for (const [key, values] of Object.entries(tempMenus)) {
        getDoc(doc(db, 'modules', key)).then(o => {
            console.log("using firestore in menus: ", o.data())
            let d: any = o.data();
            m.push({
                ...d,
                "children": values
            })
            return m
        }).then((m) => {
            localStorage.setItem("menus", JSON.stringify(m))
        })
    }

}