import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";

const useCheckAccess = (email: any = "") => {

}

const useGetAccess = (email: any = "") => {
    const [menus, setMenus] = useState<any>([]);
    let m: any = []
    const getMenus = async (query: any) => {
        await getDocs(query).then(d => {
            d.docs.forEach((q) => {
                m.push(q.data())
            })
        }).then(() => {
            m = _.uniq(m, x => x.id)
            console.log(m)
            setMenus(m)
        })
    };
    useEffect(() => {
        if (email) {
            const menusAddQuery = query(collectionGroup(db, "functions"), where("access.add", "array-contains", email));
            getMenus(menusAddQuery);

            const menusEditQuery = query(collectionGroup(db, "functions"), where("access.edit", "array-contains", email));
            getMenus(menusEditQuery);

            const menusDeleteQuery = query(collectionGroup(db, "functions"), where("access.delete", "array-contains", email));
            getMenus(menusDeleteQuery);

            const menusViewQuery = query(collectionGroup(db, "functions"), where("access.view", "array-contains", email));
            getMenus(menusViewQuery);
        }
    }, [email]);
    localStorage.setItem("menus", JSON.stringify(menus))
    return menus;
}

export { useCheckAccess, useGetAccess }
