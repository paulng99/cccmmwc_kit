import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtFkx3MgdSx_GttG2qeyCe5__WZxVLwV4",
  authDomain: "cccmmwc-cfeec.firebaseapp.com",
  projectId: "cccmmwc-cfeec",
  storageBucket: "cccmmwc-cfeec.appspot.com",
  messagingSenderId: "554697695134",
  appId: "1:554697695134:web:99705afab367739ba3c08f",
  measurementId: "G-RJQ61GJDVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};