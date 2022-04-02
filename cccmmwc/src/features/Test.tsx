import { IonButton } from "@ionic/react";
import { collectionGroup, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { AppContext } from "./App/AppContext";

const Test = (prop: any) => {

    const { appState, appDispatch } = useContext(AppContext);
    const [dataSnap, setDataSnap] = useState<DocumentData>([]);
    useEffect(() => {
        const accessRef = query(collectionGroup(db, "menus"), where("accessGroups", "array-contains-any", ["RnM78h1Mdt4OzgB1DsbX", "mfUE8YkW2CQUy12emKgP"]))
        getDocs(accessRef).then((d: QuerySnapshot) => {
            console.log(d.size)
            d.forEach((d1: QueryDocumentSnapshot) => {
                console.log(d1.ref.path);

            });
        }, (error) => {
            console.log(error)
        });
    }, []);

    const handleClick = () => {
        appDispatch({
            "type": "LOADING",
            "payload": !appState.isLoading,
        })
    }

    return (
        <>
            {JSON.stringify(appState)}<br></br>
            <IonButton onClick={handleClick}>Change Loading</IonButton>
        </>
    );
}

export { Test }