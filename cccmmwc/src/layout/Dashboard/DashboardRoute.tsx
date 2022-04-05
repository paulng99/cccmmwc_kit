import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import { Setup } from "./Setup"

export const DashboardRoute = () => (
    <IonRouterOutlet>
        <Route exact path="/dashboard/home" render={(p) => {
            return (<>1212</>)
        }} />
        <Route exact path="/dashboard" render={(p) => {
            return (<>///</>)
        }} />
        <Route exact path="/dashboard/setup" component={Setup} />

    </IonRouterOutlet>
);