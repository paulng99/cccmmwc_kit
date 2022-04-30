import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";

export default (e: any | null = null) => {
    const [email, setEmail] = useState<any>(e || JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))).email||null)
    const [groups, setGroups] = useState(["guest"])


    useEffect(() => {
        email && getDoc(doc(db, "users", email)).then(d => {
            let user = d.data();
            setGroups(user?.groups)
            console.log(groups)
        })
    }, [e])
    localStorage.setItem("groups", JSON.stringify(groups))
    return groups
}