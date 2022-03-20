import React from "react";
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuToggle, IonPage, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { home, menu, people, peopleCircleOutline, personCircleOutline, personOutline } from 'ionicons/icons'

const Dashboard: React.FC = (prop) => {
    return (
        <IonSplitPane when="sm" contentId="dashboard-content">
            <IonMenu contentId="dashboard-content" side="start">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonMenu>

            <IonPage id="dashboard-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuToggle>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={menu}></IonIcon>
                                </IonButton>
                            </IonMenuToggle>
                        </IonButtons>
                        <IonTitle>Dashboard</IonTitle>
                        <IonButtons slot="end">
                            <IonButton>
                                <IonIcon icon={personCircleOutline} size="large"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    Test
                </IonContent>
            </IonPage>
        </IonSplitPane>
    );
}

export { Dashboard };