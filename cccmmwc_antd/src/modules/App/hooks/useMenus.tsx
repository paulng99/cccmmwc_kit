import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { AppContext } from "../AppContext";

export default () => {
    const [menus, setMenus] = useState({});
    const { appState, appDispatch } = useContext(AppContext)

    const getMenus = (query: any) => {
        console.log(query)
        let m: _.List<any> = [];
        getDocs(query).then(d => {
            console.log(d.docs)
            d.docs.forEach((q) => {
                console.log(q.data())
                m = _.union(m, [q.data()]);
            })
            console.log(m)
            setMenus(m)
        });
    };


    useEffect(() => {
        const email = appState.userInfo.email;
        console.log(email)
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

    console.log(menus)
    return menus;
}