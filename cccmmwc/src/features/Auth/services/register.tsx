import { UserInfo } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";

const checkUserExist =async (email:string)=>{
    const docRef=doc(db, "users",email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        return true;
    }else{
        return false;
    }
}


const register = async (userInfo:UserInfo)=>{
    if (await checkUserExist(userInfo.email||"")){
        return true;    
    }else{
        return false;    
    }
    return;
}

export { register }