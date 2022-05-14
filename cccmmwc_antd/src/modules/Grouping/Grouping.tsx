import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import { SetStateAction, useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export default () => {
    const [groups, setGroups] = useState<any>([]);

    const g: any = [];
    useEffect(() => {
        getDocs(collection(db, "groups")).then(g1 => {
            g1.forEach(group => {
                let g2=group.data()
                g2["id"]=group.id;
                g.push(g2)
            })
            setGroups(g)
        })
    }, [])

    return (
        <Dashboard>
            {JSON.stringify(groups)}
        </Dashboard>
    )
}