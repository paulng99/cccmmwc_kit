import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../App/AppContext";
import { AppActionType } from "../App/AppReducer";
import { googleSignout } from "./services/googleSigin";

const Logout = () => {
    const { appDispatch } = useContext (AppContext);
    const history = useHistory();
    useEffect(() => {
        googleSignout().then(() => {
            localStorage.clear();
            appDispatch({
                "type": AppActionType.LOGOUT,
                "payload": {},
            });
            history.push("/login");
        });
    });

    return (<></>);
}

export {Logout}