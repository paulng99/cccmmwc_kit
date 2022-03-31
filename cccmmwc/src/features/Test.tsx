import { collection, collectionGroup, doc, DocumentData, DocumentReference, getDoc, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";

const Test = (prop: any) => {

    const [dataSnap, setDataSnap] = useState<DocumentData>([]);

    useEffect(() => {
        const accessRef = query(collectionGroup(db, "menus"), where("accessGroups", "array-contains-any", ["RnM78h1Mdt4OzgB1DsbX", "mfUE8YkW2CQUy12emKgP"]))
        getDocs(accessRef).then((d: QuerySnapshot) => {
            console.log(d.size)
            d.forEach((d1: QueryDocumentSnapshot) => {
                console.log(d1.ref.parent.parent?.id);
                
            });
        }, (error) => {
            console.log(error)
        });
    }, []);

    return (
        <>
            
        </>
    );
}

export { Test }