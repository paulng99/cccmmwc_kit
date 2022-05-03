import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { encryptData, decryptDataToString } from '../../../utils/encrypto'
import useGroups from "./useGroups";

//Check Access Link
const useCheckAccessLink = () => {
    const [location, setLocation] = useState<string | null>(null)
    const [isAccessLink, setIsAccessLink] = useState<any>()
    useEffect(() => {
        if (location!==null) {
            console.log("access: ",JSON.parse(decryptDataToString(localStorage.getItem("access"))))
            let x = _.filter(JSON.parse(decryptDataToString(localStorage.getItem("access"))), y => {
                console.log("y:", y.menu.link)
                return y.menu.link == location
            })
            console.log("x:", x)
            x.length > 0 ? setIsAccessLink(true) : setIsAccessLink(false)
            console.log(isAccessLink)
        }
    })
    return { isAccessLink, setLocation }
}

//Check Access Action
const useCheckAccessAction = () => {
}
 
//Get Access 
const useGetAccess = () => {
    const [access, setAccess] = useState<any>([]);
    const { groups } = useGroups();
    let m: any = []

    const getAccess = async (query: any) => {
        await getDocs(query).then(d => {
            d.docs.forEach((q) => {
                console.log("using firestore in access: ", q.data())
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

export { useGetAccess, useCheckAccessAction, useCheckAccessLink }
