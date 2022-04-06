import { useEffect } from "react";
import { Dashboard } from "../layout/Dashboard/Dashboard";
import { useGetUserGroups } from "./Auth/hooks/getUserGroups";

const Test = () => {
    const { groups, setEmail } = useGetUserGroups();
    useEffect(() => {
        setEmail("mmw-nty@cccmmwc.edu.hk");
    }, []);
    return (
        <Dashboard>
            {JSON.stringify(groups)}
            TEST
        </Dashboard>
    );
}

export { Test }