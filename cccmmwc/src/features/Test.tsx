import { collection, collectionGroup, doc, getDoc, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";

const Test = (prop: any) => {

    const [dataSnap, setDataSnap] = useState<any[]>([]);

    useEffect(() => {
        const accessRef = query(collection(db, "modules"))
        getDocs(accessRef).then((d: any) => {
            d.forEach((d1: any) => {
                console.log(d1.id)
            });
            setDataSnap(d);
        }, (error) => {
            console.log(error)
        });
    }, []);

    return (
        <>
            {JSON.stringify(dataSnap)}
        </>
    );
}

export { Test }