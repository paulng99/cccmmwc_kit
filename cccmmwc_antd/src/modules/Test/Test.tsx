import { collectionGroup, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, query, where } from "firebase/firestore";
import { SetStateAction, useContext, useEffect, useState } from "react"
import { matchPath, resolvePath, useLocation } from "react-router";
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { auth, db } from "../../services/firebase";
import { AppContext } from "../App/AppContext";

export const Test = () => {
    const {appState, appDispatch}=useContext(AppContext)
    const [data, setData] = useState<DocumentData>([]);
    const location=useLocation();
    useEffect(
        () => {
            let access: SetStateAction<DocumentData>[]=[];
            const menuQuery = query(collectionGroup(db, "functions"), where("access.add", "array-contains", "mmw-nty@cccmmwc.edu.hk"));
            getDocs(menuQuery).then(({ docs }) => {
                docs.forEach(d => {
                    access.push(d.data());
                })
                setData(access);
            })

        }, []);

    return (
        <Dashboard>
            <pre>{auth.currentUser?.email}</pre>
            {/* <pre style={{"height":"80vh","width":"80%"}}>{JSON.stringify(data, undefined, 2)}</pre> */}
            <pre>{JSON.stringify(appState, undefined,2)}</pre>
        </Dashboard>
    )
}

