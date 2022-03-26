import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";

const Test = (prop: any) => {

    const [dataSnap, setDataSnap] = useState<any[]>([]);

    useEffect(() => {
        const accessRef = doc(db, "modules", "Users");
        getDoc(accessRef).then((d: any) => {
            setDataSnap(d.data());
            console.log(d.data())
        });
    }, []);

    return (
        <>
            {dataSnap.toLocaleString()}
        </>
    );
}

export { Test }