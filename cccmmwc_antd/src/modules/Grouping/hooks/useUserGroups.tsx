import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../services/firebase"
import { decryptDataToString } from "../../../utils/encrypto"

export default () => {
    const [email, setEmail] = useState("")
    const [userGroups, setUserGroups] = useState([])
    useEffect(() => {
        if (email == "") {
/*             let userInfo = JSON.parse(decryptDataToString(localStorage.getItem("userInfo")))
            console.log(userInfo.email)
            setEmail(userInfo.email) */
            console.log("no user email")
        } else {
            getDoc(doc(db, "users", email)).then((g) => {
                console.log(g.data())
                setUserGroups(g.data()?.groups)
            })
        }
        console.log(email)
    }, [email])
    return { userGroups, setEmail }
}