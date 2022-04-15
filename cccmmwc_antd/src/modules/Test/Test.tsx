import { collectionGroup, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export const Test = () => {
    const [data, setData] = useState<DocumentData[]>();

    useEffect(
        ()=>{
            const dataArray: DocumentData[]=[];
            const menuQuery=collectionGroup(db,"menus");
            getDocs(menuQuery).then(d=>{
                d.forEach(dd=>{
                    dataArray.push(dd.data());
                })
                console.log(dataArray)
                setData(dataArray);
            })
        },[]);

    return (
        <Dashboard>
            <pre>{JSON.stringify(data)}</pre>
        </Dashboard>
    )
}