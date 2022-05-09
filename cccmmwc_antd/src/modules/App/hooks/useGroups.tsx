import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";

export default (e: string | null = null) => {
    const [groups, setGroups] = useState<any[]>([])
    const [email, setEmail] = useState<string | null>(e)
    useEffect(() => {
        if (!localStorage.getItem("userInfo")){
            setGroups(["guest"])
        }
        email && getDoc(doc(db, "users", email)).then(d => {
            console.log("using firestore in groups: ", d.data())
            let user = d.data();
            setGroups(user?.groups)
        })
    }, [email])
    localStorage.setItem("groups", JSON.stringify(groups))
    return { groups, setEmail }
}