import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


export const googleSigin=()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth=getAuth();
    let sp=signInWithPopup(auth, googleProvider).then((result)=>{
        localStorage.setItem("userInfo",JSON.stringify(result.user))
        console.log(GoogleAuthProvider.credentialFromResult(result))
        return result.user;
    })
    return sp;
}

export const googleSignout=()=>{
    let sp = signOut(getAuth()).then(()=>{
        localStorage.clear();
    })
    return sp;
}