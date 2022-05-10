import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collectionGroup, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { useNavigate } from "react-router";
import _ from "underscore";
import { auth, db } from "../../services/firebase";
import { encryptData } from "../../utils/encrypto";
import { AppContext } from "../App/AppContext";
import { useGetAccess } from "../App/hooks_backup/useAccess";
import './Login.css'


export default () => {
    const navigate = useNavigate();
    const { appState, appDispatch } = useContext(AppContext);

    const handleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        let g: any[];
        appDispatch({
            "type": "LOADING",
            "payload": true,
        })
        signInWithPopup(auth, googleProvider).then(async result => {
            localStorage.setItem("userInfo", encryptData(result.user));
            getDoc(doc(db, "users", result.user.email || "")).then(d => {
                localStorage.setItem("groups", JSON.stringify(d.data()?.groups))
                g = d.data()?.groups;
                setLSAccess(g);
            })
            appDispatch({
                "type": "LOADING",
                "payload": false,
            })
            navigate('/test')
        }).catch((e) => {
            appDispatch({
                "type": "LOADING",
                "payload": false
            })
            console.log("error", e);
        });
    }

    const setLSAccess = (g: any[]) => {
        let m: any = []
        console.log(g)
        const getAccess = async (query: any) => {
            await getDocs(query).then(d => {
                d.docs.forEach((q) => {
                    console.log("using firestore in access: ", q.data())
                    m.push(q.data())
                })
            }).then(() => {
                m = _.uniq(m, x => x.id)
                localStorage.setItem("access", encryptData(m))
            })
        }
        const menusAddQuery = query(collectionGroup(db, "functions"), where("access.add", "array-contains-any", g));
        getAccess(menusAddQuery);

        const menusEditQuery = query(collectionGroup(db, "functions"), where("access.edit", "array-contains-any", g));
        getAccess(menusEditQuery);

        const menusDeleteQuery = query(collectionGroup(db, "functions"), where("access.delete", "array-contains-any", g));
        getAccess(menusDeleteQuery);

        const menusViewQuery = query(collectionGroup(db, "functions"), where("access.view", "array-contains-any", g));
        getAccess(menusViewQuery);

    }
    return (
        <div id="login">
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}