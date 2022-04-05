import { Dashboard } from "../layout/Dashboard/Dashboard";
import { useGetUserGroups } from "./Auth/hooks/getUserGroups";

const Test = () => {
    const groups=useGetUserGroups();
    return (
        <Dashboard>
            {JSON.stringify(groups)}
            TEST
        </Dashboard>
    );
}

export { Test }