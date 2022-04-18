import { collectionGroup, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export const Test = () => {
    const [data, setData] = useState<DocumentData>();

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
            <pre>{JSON.stringify(data)}</pre>
        </Dashboard>
    )
}

