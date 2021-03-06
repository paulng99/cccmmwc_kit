import React from "react";
import { Route } from "react-router";
import { Dashboard } from "../../layout/Dashboard/Dashboard";
import { IonRouterOutlet } from "@ionic/react";
import { Login } from "../Auth/Login";
import { Test } from "../Test";
import { Logout } from "../Auth/Logout";
import { Setup } from "../feature_template/Setup";

export const AppRoute = () => (
  <IonRouterOutlet>
    <Route path='/dashboard' component={Dashboard} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/logout' component ={Logout} />
    <Route exact path="/test" component={Setup} />
  </IonRouterOutlet>
);