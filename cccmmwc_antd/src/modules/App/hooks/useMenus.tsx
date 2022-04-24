import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { AppContext } from "../AppContext";

export default () => {
    const [menus, setMenus] = useState<any>();
    const { appState, appDispatch } = useContext(AppContext)
    let m: any = []
    const getMenus = async (query: any) => {
        await getDocs(query).then(d => {
            d.docs.forEach((q) => {
                m.push(q.data())
            })
        }).then(() => {
            m=_.uniq(m, x => x.id)
            setMenus(m) 
        })
    };

    useEffect(() => {
        const email = appState.userInfo.email||"";
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

    }, [appState]);

    return menus;
}