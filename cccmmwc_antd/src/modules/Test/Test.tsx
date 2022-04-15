import { doc, DocumentData, DocumentSnapshot, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export const Test = () => {
    const [data, setData] = useState<DocumentData>();

    useEffect(
        () => {
            const menuQuery = doc(db, "modules", "Grouping", "rights", "add_grouping");
            getDoc(menuQuery).then((d:DocumentSnapshot) => {
                console.log(d.data());
                setData(d.data());
             }
            )
        }, []);

    return (
        <Dashboard>
            <pre>{JSON.stringify(data)}</pre>
        </Dashboard>
    )
}

