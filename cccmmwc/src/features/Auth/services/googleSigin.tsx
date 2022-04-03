import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export const googleSigin = () => {
    const domains = ["cccmmwc.edu.hk", "365.cccmmwc.edu.hk"];

    const checkDomain = (email: string) => {
        let checked = false;
        domains.forEach((d) => {
            checked = checked || email.endsWith(d);
        });
        return checked;
    }

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    let sp = signInWithPopup(auth, googleProvider).then((result) => {
        if (checkDomain(result.user.email || "")) {
            localStorage.setItem("userInfo", JSON.stringify(result.user))
            console.log(GoogleAuthProvider.credentialFromResult(result))
            return result.user;
        } else {
            console.log("domain is incorrect.")
            googleSignout();
        }
    })
    return sp;
}

export const googleSignout = () => {
    let sp = signOut(getAuth()).then(() => {
        localStorage.clear();
    })
    return sp;
}