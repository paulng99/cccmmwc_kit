import { AES } from "crypto-js";
import { useEffect, useState } from "react";
import { hashpasscode } from "../configs/hashpasscode";
import { Dashboard } from "../layout/Dashboard/Dashboard";
import { useGetUserGroups } from "./Auth/hooks/getUserGroups";

const Test = () => {
    const { groups, setEmail } = useGetUserGroups();
    const [ ggroups, setGgroups ] = useState("");
    useEffect(() => {
        setEmail("mmw-nty@cccmmwc.edu.hk");
        const hashGroups = localStorage.getItem("groups");
        setGgroups(AES.decrypt(hashGroups||"",hashpasscode).toString());
    }, []);



    return (
        <Dashboard>
            <div>
                {JSON.stringify(groups)}
            </div>
            <div>
                {ggroups}
            </div>
            <div>TEST</div>
        </Dashboard>
    );
}

export { Test }