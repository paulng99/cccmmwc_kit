import { IonButton } from "@ionic/react";
import { collectionGroup, DocumentData, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { AppContext } from "./App/AppContext";
import { register } from "./Auth/services/register";

const Test = (prop: any) => {

    const { appState, appDispatch } = useContext(AppContext);
    const [dataSnap, setDataSnap] = useState<DocumentData>([]);
    const [vars, setVars]= useState(null);

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
        register(appState.userInfo).then((r)=>{
            setVars(r)
        })
    }, []);

    const handleClick = () => {
        appDispatch({
            "type": "LOADING",
            "payload": !appState.isLoading,
        })
    }

    return (
        <>
            {vars}<br></br>
            <IonButton onClick={handleClick}>Change Loading</IonButton>
        </>
    );
}

export { Test }