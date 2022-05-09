import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../../services/firebase";
import { decryptDataToString } from "../../../utils/encrypto";

export default (e: string | null = null) => {
    const [groups, setGroups] = useState(["guest"])
    const [email, setEmail] = useState<string|null>()


    useEffect(() => {
        email && getDoc(doc(db, "users", email)).then(d => {
            console.log("using firestore in groups: ", d.data())
            let user = d.data();
            setGroups(user?.groups)
            localStorage.setItem("groups",JSON.stringify(groups))
        })
    }, [email])

    return { groups, setEmail }
}