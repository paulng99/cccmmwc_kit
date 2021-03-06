import React, { useContext } from "react";
import { IonAccordion, IonAccordionGroup, IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonPage, IonPopover, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { menu, home } from 'ionicons/icons'
import { useHistory } from "react-router";
import { DashboardRoute } from "./DashboardRoute";
import { menuConfig } from "../../configs/menuConfig"
import { googleSignout } from "../../features/Auth/services/googleSigin";
import { Logout } from "../../features/Auth/Logout";
import { AppContext } from "../../features/App/AppContext";

type accordProp = {
    menuName: string,
    menuColor?: string,
    menuIcon?: string,
    menuLink?: string,
    menuChildren?: Array<itemProp>,
    key?: number
}

type listProp = {
    listHeaderName: string,
    listHeaderColor?: string,
    listHeaderIcon?: string,
    listMenu?: Array<itemProp>,
    key?: number
}

type itemProp = {
    menuName: string,
    menuColor?: string,
    menuIcon?: string,
    menuLink?: string,
    key?: number
}


const Accordion = (prop: accordProp) => {
    return (
        <IonAccordion>
            <IonItem slot="header" color={prop.menuColor} routerLink={prop.menuLink}>
                <IonIcon slot="start" icon={prop.menuIcon}></IonIcon>
                <IonIcon slot="start" icon={home}></IonIcon>
                <IonLabel>{prop.menuName}</IonLabel>
            </IonItem>
            <IonList slot="content" key={prop.key}>
                <>
                    {prop.menuChildren?.map((p, i) => {
                        return (
                            <SubItem {...p} key={i} />
                        )
                    })}
                </>
            </IonList>
        </IonAccordion>
    );
}

const SubItem = (prop: itemProp) => {
    return (
        <IonItem color={prop.menuColor} routerLink={prop.menuLink} key={prop.key}>
            <IonIcon slot="start" icon={prop.menuIcon}></IonIcon>
            <IonIcon slot="start" icon={home}></IonIcon>
            <IonLabel>{prop.menuName}</IonLabel>
        </IonItem>
    );
}

const List = (prop: listProp) => {
    return (
        <IonList key={prop.key}>
            <IonListHeader color={prop.listHeaderColor}>
                <IonIcon icon={prop.listHeaderIcon}></IonIcon>
                <IonIcon slot="start" icon={home}></IonIcon>
                <IonLabel>{prop.listHeaderName}</IonLabel>
            </IonListHeader>
            <IonAccordionGroup>
                <>
                    {prop.listMenu?.map((p, i) => {
                        return (
                            <Accordion {...p} key={i} />
                        );
                    })}
                </>
            </IonAccordionGroup>
        </IonList>
    );
}

const Dashboard: React.FC = (prop) => {
    const { appState, appDispatch } = useContext(AppContext);
    const history = useHistory();
    const handleLogout = () => {
        googleSignout().then(() => (
            <Logout></Logout>
        )).then(() => {
            history.push('/login');
        });
    }

    return (
        <IonSplitPane when="sm" contentId="dashboard-content">
            <IonMenu contentId="dashboard-content" side="start">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu12</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {menuConfig.map((p: any, i: any) => {
                        return (
                            <>
                                <List {...p} key={i} />
                            </>
                        );
                    })}
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
                            <IonAvatar slot="end" id="user-icon">
                                <img style={{ "padding": "10px" }} src={`${appState.userInfo.photoURL}`} />
                            </IonAvatar>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <DashboardRoute />
                    {prop.children}
                </IonContent>
                <IonPopover trigger="user-icon">
                    <IonContent>
                        <IonButton onClick={handleLogout}>Logout</IonButton>
                    </IonContent>
                </IonPopover>
            </IonPage>
        </IonSplitPane>
    );
}

export { Dashboard };