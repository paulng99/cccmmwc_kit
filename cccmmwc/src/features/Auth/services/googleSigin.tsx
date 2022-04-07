import { AES } from "crypto-js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { hashpasscode } from "../../../configs/hashpasscode";

const googleSigin = () => {
    const domains = ["cccmmwc.edu.hk", "365.cccmmwc.edu.hk"];
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const checkDomain = (email: string) => {
        let checked = false;
        domains.forEach((d) => {
            checked = checked || email.endsWith(d);
        });
        return checked;
    }
    let sp = signInWithPopup(auth, googleProvider).then((result) => {
        if (checkDomain(result.user.email || "")) {
            const hashUserInfo=AES.encrypt(JSON.stringify(result.user),hashpasscode);
            localStorage.setItem("userInfo", hashUserInfo.toString());
            
            return result.user;
        } else {
            console.log("domain is incorrect.")
            googleSignout();
        }
    })
    return sp;
}

const googleSignout = () => {
    let sp = signOut(getAuth()).then(() => {
        localStorage.clear();
    })
    return sp;
}

export { googleSigin, googleSignout }