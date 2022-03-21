import React from "react";
import { Route } from "react-router";
import { Dashboard } from "../Dashboard/Dashboard";
import { IonRouterOutlet } from "@ionic/react";

export const AppRoute = () => (
  <IonRouterOutlet>
    <Route path='/dashboard' component={Dashboard} />
    <Route exact path='/login' component={Dashboard} />
    <Route exact path='/logout' component={Dashboard} />
  </IonRouterOutlet>
);