import { AES, enc } from "crypto-js";
import { getHashPasscode } from "../config/hashpasswcode";

export const encryptData = ((data: any) => {
    let result: any = null;
    switch (typeof data) {
        case "object":
            result = AES.encrypt(JSON.stringify(data), getHashPasscode()).toString();
            break;
        case "string":
            result = AES.encrypt(data, getHashPasscode()).toString();
            break;
        case null:
            result = null
    }
    return result;

})


export const decryptDataToString = ((data: any) => {
   return AES.decrypt(data, getHashPasscode()).toString(enc.Utf8);
})