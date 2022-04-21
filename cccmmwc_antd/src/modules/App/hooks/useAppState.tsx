import { AES, enc } from "crypto-js";
import { getHashPasscode } from "../../../config/hashpasswcode";


export default () => {
    if (localStorage.getItem("appState")==null){
        return null;
    }
    let appLocalEncrypt = localStorage.getItem("appState");
    let appLocalDecrypt = enc.Utf8.stringify(AES.decrypt(appLocalEncrypt!, getHashPasscode()));
    appLocalDecrypt && console.log(JSON.parse(appLocalDecrypt))
    return JSON.parse(appLocalDecrypt);
}