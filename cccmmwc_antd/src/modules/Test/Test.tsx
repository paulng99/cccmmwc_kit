import { collectionGroup, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { matchPath, resolvePath, useLocation } from "react-router";
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export const Test = () => {
    const [data, setData] = useState<DocumentData>();
    const location=useLocation();
    useEffect(
        () => {
            const menuQuery = query(collectionGroup(db, "actions"), where("access.add", "array-contains", "mmw-nty@cccmmwc.edu.hk"));
            getDocs(menuQuery).then(({ docs }) => {
                docs.forEach(d => {
                    console.log(d.data())
                })
            })
        }, []);

    return (
        <Dashboard>
            {console.log(matchPath({
                "path":"stest",
                "caseSensitive":false,
                "end":false
            },"/sTesT/wer/"))}
            <pre>{JSON.stringify(data)}</pre>
        </Dashboard>
    )
}

