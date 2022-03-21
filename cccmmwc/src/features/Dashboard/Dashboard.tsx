import React from "react";
import { IonAccordion, IonAccordionGroup, IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { menu, personCircleOutline } from 'ionicons/icons'
import { Route, RouteComponentProps } from "react-router";

const Dashboard: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <IonSplitPane when="sm" contentId="dashboard-content">
            <IonMenu contentId="dashboard-content" side="start">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonAccordionGroup>
                        <IonAccordion>
                            <IonItem slot="header" >
                                <IonAvatar slot="start">
                                    <img src="https://source.unsplash.com/category/select/100x100" />
                                </IonAvatar>
                                <IonLabel>Select</IonLabel>
                            </IonItem>
                            <IonList slot="content">
                                <IonItem routerLink="/dashboard/home">
                                    <IonAvatar slot="start">
                                        <img src="https://source.unsplash.com/category/nature/100x100" />
                                    </IonAvatar>
                                    <IonLabel>Nature</IonLabel>
                                </IonItem>
                                <IonItem routerLink="/dashboard">
                                    <IonAvatar slot="start">
                                        <img src="https://source.unsplash.com/category/people/100x100" />
                                    </IonAvatar>
                                    <IonLabel>People</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonAvatar slot="start">
                                        <img src="https://source.unsplash.com/category/food/200x200" />
                                    </IonAvatar>
                                    <IonLabel>Food</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonAccordion>
                    </IonAccordionGroup>
                </IonContent>
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
                        <IonTitle className="ion-text-center">Dashboard</IonTitle>
                        <IonButtons slot="end">
                            <IonButton>
                                <IonIcon icon={personCircleOutline} size="large"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonRouterOutlet>
                        <Route path="/dashboard/home" render={(p) => {
                            console.log('home');
                            return (<>1212</>)
                        }}
                        />
                        <Route exact path="/dashboard" render={(p) => {
                            console.log('/');
                            return (<>///</>)
                        }}
                        />
                    </IonRouterOutlet>
                </IonContent>
            </IonPage>
        </IonSplitPane>
    );
}

export { Dashboard };