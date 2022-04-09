import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getRemoteConfig } from "firebase/remote-config";
import { firebaseConfig } from "../configs/firebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const remoteConfig = getRemoteConfig(app);

//remote config setting
remoteConfig.settings.minimumFetchIntervalMillis = 1;
remoteConfig.defaultConfig = {
  "hashpasscode": "6204336E7C2D10FE7DD5367DA614CDBC877736DB6CBDA48320A45459BAD8C098"
};

export { app, analytics, db, remoteConfig };