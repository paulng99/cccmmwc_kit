import { collectionGroup, getDocs, query, where } from "firebase/firestore"
import _ from "underscore"
import { db } from "../services/firebase"
import { encryptData } from "./encrypto"

export const getAccess = (g: any[]) => {
    let m: any = []
    console.log(g)
    const gAccess = async (query: any) => {
        await getDocs(query).then(d => {
            d.docs.forEach((q) => {
                console.log("using firestore in access: ", q.data())
                m.push(q.data())
            })
        }).then(() => {
            m = _.uniq(m, x => x.id)
            localStorage.setItem("access", encryptData(m))
            console.log(m)
        })
    }
    const menusAddQuery = query(collectionGroup(db, "functions"), where("access.add", "array-contains-any", g));
    gAccess(menusAddQuery);

    const menusEditQuery = query(collectionGroup(db, "functions"), where("access.edit", "array-contains-any", g));
    gAccess(menusEditQuery);

    const menusDeleteQuery = query(collectionGroup(db, "functions"), where("access.delete", "array-contains-any", g));
    gAccess(menusDeleteQuery);

    const menusViewQuery = query(collectionGroup(db, "functions"), where("access.view", "array-contains-any", g));
    gAccess(menusViewQuery);
}