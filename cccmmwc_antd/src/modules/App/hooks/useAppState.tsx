import { AES, enc } from "crypto-js";
import { useNavigate } from "react-router";
import { getHashPasscode } from "../../../config/hashpasswcode";


export default () => {

    const navigate = useNavigate();

    if (localStorage.getItem("appState") == null) {
        return null;
    }
    let appLocalEncrypt = localStorage.getItem("appState");
    let appLocalDecrypt = enc.Utf8.stringify(AES.decrypt(appLocalEncrypt!, getHashPasscode()));
    console.log(appLocalDecrypt);
    if (appLocalDecrypt != "") {
        return JSON.parse(appLocalDecrypt);
    }
    else {
        navigate('/auth/logout');
    }
}