import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";
export default (e: any | null = null) => {
    const [email, setEmail] = useState<string>(e)
    const [groups, setGroups] = useState(["guest"])
    let userInfo = { "email": "" }
    if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(decryptDataToString(localStorage.getItem("userInfo")));
    }

    useEffect(() => {
        userInfo.email && getDoc(doc(db, "users", userInfo.email)).then(d => {
            let user = d.data();
            setGroups(user?.groups)
            console.log(groups)
        })
    }, [email])
    localStorage.setItem("groups", JSON.stringify(groups))
    return groups
}