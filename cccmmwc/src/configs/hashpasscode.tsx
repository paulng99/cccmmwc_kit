import { getValue } from "firebase/remote-config";
import { remoteConfig } from "../services/firebase";


const hash=getValue(remoteConfig, "hashpasscode")
console.log(hash.asString())
export const hashpasscode = hash.asString();

//export const hashpasscode = "6204336E7C2D10FE7DD5367DA614CDBC877736DB6CBDA48320A45459BAD8C098";