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


    useEffect(() => {
        setEmail(appState.userInfo.email);
        const hashGroups = localStorage.getItem("groups");
        console.log(AES.decrypt(hashGroups||"", hashpasscode).toString(enc.Utf8))
        setGgroups(JSON.parse(AES.decrypt(hashGroups || "", hashpasscode).toString(enc.Utf8)));
    }, []);

    useEffect(()=>{

    },[groups]);


    return (
        <Dashboard>
            <div>
                {JSON.stringify(groups)}
            </div>
            <div>
                {JSON.stringify(ggroups)}
            </div>
            <div>TEST</div>
        </Dashboard>
    );
}

export { Test }