import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import _ from "underscore";
import { db } from "../../../services/firebase";
import { encryptData, decryptDataToString } from '../../../utils/encrypto'
import useGroups from "./useGroups";

//Check Access Link
/* const useCheckAccessLink = () => {
    const [location, setLocation] = useState<string | null>()
    const [isAccessLink, setIsAccessLink] = useState<boolean>()
    const getAccess = useGetAccess();
    console.log(location)
    useEffect(() => {
        if (location && getAccess.length > 0) {
            console.log("getAccess: ",getAccess)
            let x = _.filter(JSON.parse(decryptDataToString(localStorage.getItem("access"))), y => {
                console.log("y:", y.menu.link)
                return y.menu.link == location
            })
            console.log(x.length)
            if (x.length == 0) {
                setIsAccessLink(false);
            } else if (x.length > 0) {
                setIsAccessLink(true) 
            }
        }
    }, [location, getAccess])

    //setIsAccessLink(x.length>0)
    return { isAccessLink, setLocation }
} */
/* 
//Check Access Action
const useCheckAccessAction = () => {
} */

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
            localStorage.setItem("access", encryptData(m))
            setAccess(m)
        })
    };

    useEffect(() => {
        if (groups.length>0) {
            console.log("groups: ",groups)
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

    return access;
}

export { useGetAccess }
