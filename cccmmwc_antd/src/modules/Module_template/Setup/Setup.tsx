import { EyeOutlined } from "@ant-design/icons";
import { Button, Table, TableColumnsType } from "antd";
import { doc, writeBatch } from "firebase/firestore";
import { MouseEvent, useState } from "react";
import { db } from "../../../services/firebase";
import { setupFunctions, setupModule } from "./SetupData";


export default () => {
    const [loading, setLoading] = useState(false);
    const tableData: readonly any[] | undefined = [
        {
            key: '1',
            progress: "Add Grouping",
            setup: <EyeOutlined />
        },
        {
            key: '2',
            progress: "Delete Grouping",
            setup: <EyeOutlined />
        }
    ];
    const colData: TableColumnsType<any> | undefined = [
        {
            title: "Progress",
            dataIndex: "progress",
            key: "progress"
        },
        {
            title: "Setup",
            dataIndex: "setup",
            key: "setup"
        }
    ];
    const handleClick = async (e: MouseEvent) => {
        e.preventDefault();
        setLoading(true);
        const batch = writeBatch(db);

        const moduleRef = doc(db, "modules", setupModule.id);
        batch.set(moduleRef, setupModule);

        setupFunctions.forEach((f) => {
            let functionRef = doc(db, "modules", setupModule.id, "functions", f.id);
            batch.set(functionRef, f);
        })

        await batch.commit();

        console.log("set up completed.");
        setLoading(false);
    }

    return (
        <>
            <Button onClick={handleClick} loading={loading}>Setup</Button>
            <Table dataSource={tableData} columns={colData}></Table>
        </>
    );
}