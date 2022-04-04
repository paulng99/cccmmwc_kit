import { UserInfo } from "firebase/auth"
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../../../services/firebase"

const register = async (userInfo: UserInfo) => {
    if (userInfo.email) {
        const docRef = collection(db, "users");
        const groupsRef = query(docRef,where("groups","array-contains","teacher"))
        const unsub = onSnapshot(groupsRef, (doc) => {
            console.log(doc.docs);
            return doc.docs;
        });
    }
}

export { register }