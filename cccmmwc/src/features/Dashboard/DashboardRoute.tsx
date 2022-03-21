import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";

export const DashboardRoute = () => (
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
);