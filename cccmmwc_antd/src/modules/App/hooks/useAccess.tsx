import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";

const useCheckAccess = (email: any = "") => {
    if (!localStorage.getItem("menu")){
        return false;
    }
}

const useGetAccess = (email: any = "") => {
    const [access, setAccess] = useState<any>([]);
    let m: any = []
    
    const getAccess = async (query: any) => {
        await getDocs(query).then(d => {
            d.docs.forEach((q) => {
                m.push(q.data())
            })
        }).then(() => {
            m = _.uniq(m, x => x.id)
            setAccess(m)
        })
    };

    useEffect(() => {
        if (email) {
            const menusAddQuery = query(collectionGroup(db, "functions"), where("access.add", "array-contains", email));
            getAccess(menusAddQuery);

            const menusEditQuery = query(collectionGroup(db, "functions"), where("access.edit", "array-contains", email));
            getAccess(menusEditQuery);

            const menusDeleteQuery = query(collectionGroup(db, "functions"), where("access.delete", "array-contains", email));
            getAccess(menusDeleteQuery);

            const menusViewQuery = query(collectionGroup(db, "functions"), where("access.view", "array-contains", email));
            getAccess(menusViewQuery);
        }
    }, [email]);

    useEffect(()=>{
        localStorage.setItem("access", JSON.stringify(access))
    },[access]);
    return access;
}

export { useCheckAccess, useGetAccess }
