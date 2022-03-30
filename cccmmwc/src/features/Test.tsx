import { collection, collectionGroup, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";

const Test = (prop: any) => {

    const [dataSnap, setDataSnap] = useState<any[]>([]);

    useEffect(() => {
        const accessRef = query(collectionGroup(db, "menus") , where("accessGroups","array-contains","RnM78h1Mdt4OzgB1DsbX"))
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