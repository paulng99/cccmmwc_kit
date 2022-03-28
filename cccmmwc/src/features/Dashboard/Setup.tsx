import { IonButton } from "@ionic/react";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase";


export const Setup = (prop: any) => {

    const configData = {
        "name": "App",
        "Test": "test",
        "setupTimestamp": Timestamp.now(),
    }

    const configMenu = [{
        "id": "menu_1",
        "menuName": "menu_app_1",
        "menuColor": "primary",
        "menuIcon": "home"
    }, {
        "id": "menu_2",
        "menuName": "menu_app_2",
        "menuColor": "primary",
        "menuIcon": "home"
    }, {
        "id": "menu_3",
        "menuName": "menu_app_3",
        "menuColor": "primary",
        "menuIcon": "home"
    }
    ]

    const configAccess = {

    }

    const setup = (e: any) => {
        const modulesRef = doc(db, "modules", configData.name);
        setDoc(modulesRef, configData).then(() => {
            alert("Setup is already!");
        })

        configMenu.forEach((c) => {
            const menuRef = doc(db, "modules/App/menus", c.id);
            setDoc(menuRef, c).then(() => {
                alert("Setup menu is already!");
            }, (e) => {
                console.log(e)
            })
        })
    }


    return (
        <>
            <IonButton onClick={setup} fill="outline" >Setup</IonButton>
        </>
    );

}