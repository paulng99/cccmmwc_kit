import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { db } from "../../../services/firebase"

export const useGetUserGroups = (email: string) => {
    const [groups, setGroups] = useState({});

    useEffect(() => {
        email && getDoc(doc(db, "users", email)).then((d) => {
            if (d.exists()) {
                setGroups(d.data())
            } else {
                setGroups({});
            }
        });
    }, []);


    return groups;
}