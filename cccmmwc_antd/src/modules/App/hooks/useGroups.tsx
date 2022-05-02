import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";

export default (e: any | null = null) => {
    const [email, setEmail] = useState<string|null>()
    const [groups, setGroups] = useState(["guest"])


    useEffect(() => {
        if (localStorage.getItem("userInfo")){
            setEmail(JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))).email)
        }
        email && getDoc(doc(db, "users", email)).then(d => {
            let user = d.data();
            setGroups(user?.groups)
        })
    }, [email])
    localStorage.setItem("groups", JSON.stringify(groups))
    return {groups, setEmail}
}