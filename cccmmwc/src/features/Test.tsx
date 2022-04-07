import { AES, enc } from "crypto-js";
import { useContext, useEffect, useState } from "react";
import { hashpasscode } from "../configs/hashpasscode";
import { Dashboard } from "../layout/Dashboard/Dashboard";
import { AppContext } from "./App/AppContext";
import { useGetUserGroups } from "./Auth/hooks/getUserGroups";

const Test = () => {
    const { groups, setEmail } = useGetUserGroups();
    const [ggroups, setGgroups] = useState([]);
    const { appState } = useContext(AppContext);
    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = () => {
        let hashU = localStorage.getItem("userInfo");
        return (JSON.parse(AES.decrypt(hashU || "", hashpasscode).toString(enc.Utf8)))
    }

    useEffect(() => {
        setEmail(appState.userInfo.email);
        const hashGroups = localStorage.getItem("groups");
        setGgroups(JSON.parse(AES.decrypt(hashGroups || "", hashpasscode).toString(enc.Utf8)));
        setUserInfo(getUserInfo())
    }, []);

    return (
        <Dashboard>
            <div>
                {JSON.stringify(groups)}
            </div>
            <div>
                {JSON.stringify(ggroups)}
            </div>
            <div>TEST</div>
            <div>
                {JSON.stringify(userInfo)}
            </div>
        </Dashboard>
    );
}

export { Test }