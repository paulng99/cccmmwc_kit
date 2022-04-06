import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { db } from "../../../services/firebase"

export const useGetUserGroups = () => {
    const [email, setEmail] = useState("")
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        email && getDoc(doc(db, "users", email)).then((d) => {
            if (d.exists()) {
                setGroups(d.data().groups)
            } else {
                setGroups([]);
            }
        });
    }, [email]);
    return { groups, setEmail };
}