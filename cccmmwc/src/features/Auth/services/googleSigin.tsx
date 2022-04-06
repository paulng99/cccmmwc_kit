import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

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
            localStorage.setItem("userInfo", JSON.stringify(result.user));
            
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