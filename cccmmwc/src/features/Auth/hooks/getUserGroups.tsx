import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { db } from "../../../services/firebase"

export const useGetUserGroups = () => {
    const [groups, setGroups] = useState({});
    const docRef = doc(db, "users", "mmw-nty@cccmmwc.edu.hk");

    useEffect(() => {
        const docSnap = getDoc(docRef).then((d) => {
            if (d.exists()) {
                setGroups(d.data())
            } else {
                setGroups({});
            }
        });

    }, []);


    return groups;
}