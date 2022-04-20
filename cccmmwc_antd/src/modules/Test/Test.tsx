import { collectionGroup, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, query, where } from "firebase/firestore";
import { SetStateAction, useEffect, useState } from "react"
import { matchPath, resolvePath, useLocation } from "react-router";
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export const Test = () => {
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
            <pre style={{"height":"80vh","width":"80%"}}>{JSON.stringify(data, undefined, 2)}</pre>
        </Dashboard>
    )
}

