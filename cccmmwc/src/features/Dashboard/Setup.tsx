import { IonButton } from "@ionic/react";
import { addDoc, arrayUnion, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebase";


export const Setup = (prop: any) => {

    const [report, setReport]=useState<Array<string>>([])

    const configData = {
        "name": "App",
        "setupTimestamp": Timestamp.now(),
        "access": {
            "getGroups": arrayUnion(),
            "listGroups": arrayUnion(),
            "createGroups": arrayUnion(),
            "updateGroups": arrayUnion(),
            "deleteGroups": arrayUnion(),
        }
    }

    const configMenu = [
        {
            "id": "menu_1",
            "menuName": "menu_app_1",
            "menuColor": null,
            "menuIcon": "home",
            "menuLink": null,
            "accessGroups": arrayUnion(),
        }, {
            "id": "menu_2",
            "menuName": "menu_app_2",
            "menuColor": null,
            "menuIcon": "home",
            "menuLink": null,
            "accessGroups": arrayUnion(),
        }, {
            "id": "menu_3",
            "menuName": "menu_app_3",
            "menuColor": "primary",
            "menuIcon": "home",
            "menuLink": null,
            "accessGroups": arrayUnion(),
        }, {
            "id": "main_4",
            "menuName": "menu_app",
            "menuColor": null,
            "menuIcon": "home",
            "menuLink": null,
            "accessGroups": arrayUnion(),
        }
    ]


    const setup = (e: any) => {
        const modulesRef = doc(db, "modules", configData.name);
        setDoc(modulesRef, configData).then(() => {
            console.log("Setup is already!");
            setReport([...report, "Setup is already!"])
        })

        configMenu.forEach((c) => {
            const menuRef = doc(db, "modules/App/menus", c.id);
            setDoc(menuRef, c).then(() => {
                console.log("Setup menu is already!");
                setReport([...report, "Setup menu is already!"])
            }, (e) => {
                console.log(e)
            })
        })
        
    }


    return (
        <>
            <IonButton onClick={setup} fill="outline" >Setup</IonButton><br></br>
            {console.log(JSON.stringify(report))}
            {report.map((r)=>(r))}
        </>
    );
}