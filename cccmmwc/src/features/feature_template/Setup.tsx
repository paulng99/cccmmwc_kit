import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react'
import { menusConfig, info, accessRight } from './setupConfig'


const Setup = () => {
    const [setupInfo, setSetupInfo] = useState(false);
    const [setupMenu, setSetupMenu] = useState(false);
    const [setupRight, setSetupRight] = useState(false);
    const [setup, setSetup] = useState(false);

    useEffect(()=>{
        
    },[]);

    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonListHeader>Module Info</IonListHeader>
                    <IonItem>
                        <IonLabel>Name</IonLabel>
                        <IonNote slot='end' color="danger">incomplete</IonNote>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}


export { Setup }