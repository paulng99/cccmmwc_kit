import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";
export default (user: any | null = null) => {
    const [userInfo, setUserInfo] = useState<any>(user||JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))))
    const [groups, setGroups] = useState(["guest"])


    useEffect(() => {
        userInfo.email && getDoc(doc(db, "users", userInfo.email)).then(d => {
            let user = d.data();
            setGroups(user?.groups)
            console.log(groups)
        })
    }, [userInfo])
    localStorage.setItem("groups", JSON.stringify(groups))
    return groups
}