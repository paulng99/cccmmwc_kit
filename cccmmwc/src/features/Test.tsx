import { IonContent } from "@ionic/react";
import { collectionGroup, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Dashboard } from "../layout/Dashboard/Dashboard";
import { db } from "../services/firebase";

const Test = () => {
    const [menus, setMenus] = useState<any>([]);
    const [groups, setGroups] = useState();

    useEffect(() => {
        const menusRef = collectionGroup(db, "menus");
        onSnapshot(menusRef,menu => {
            let menusTemp: any[]=[];
            menu.docs.forEach(m=>{
                menusTemp.push(m.data());
            })
            setMenus(menusTemp);
        })
    }, []);


    return (
        <IonContent>
            <div>Menu:</div>
            <div><pre>{JSON.stringify(menus,null,2)}</pre></div>
            <div>Groups:</div>
            <div>{groups}</div>
        </IonContent>
    );
}

export { Test }