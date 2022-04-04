import { UserInfo } from "firebase/auth"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../../../services/firebase"

const useRegister = async (userInfo: UserInfo) => {
    if (userInfo.email) {
        const docRef = collection(db, "users");
        const groupsRef = query(docRef,where("groups","array-contains","teacher"))
        const unsub = onSnapshot(groupsRef, (doc) => {

        });
    }
}


export { useRegister }