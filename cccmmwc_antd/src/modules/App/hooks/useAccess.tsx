import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { encryptData, decryptDataToString } from '../../../utils/encrypto'
import useGroups from "./useGroups";

/* const useCheckAccess = (action: any) => {
    if (!localStorage.getItem("access")) {
        return false;
    } else {
        let lsAccess = JSON.parse(decryptDataToString(localStorage.getItem("access")))
    }
} */

const useGetAccess = () => {
    const [access, setAccess] = useState<any>([]);
    const {groups} = useGroups();
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
        if (groups) {
            const menusAddQuery = query(collectionGroup(db, "functions"), where("access.add", "array-contains-any", groups));
            getAccess(menusAddQuery);

            const menusEditQuery = query(collectionGroup(db, "functions"), where("access.edit", "array-contains-any", groups));
            getAccess(menusEditQuery);

            const menusDeleteQuery = query(collectionGroup(db, "functions"), where("access.delete", "array-contains-any", groups));
            getAccess(menusDeleteQuery);

            const menusViewQuery = query(collectionGroup(db, "functions"), where("access.view", "array-contains-any", groups));
            getAccess(menusViewQuery);
        }
    }, [groups]);

    useEffect(() => {
        let enAccess = encryptData(access)
        localStorage.setItem("access", enAccess)
    }, [access]);
    return access;
}

export { useGetAccess }
