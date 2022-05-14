import { UserAddOutlined } from "@ant-design/icons";
import { Affix, Button, Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export default () => {
    const [groups, setGroups] = useState<any>([]);

    const g: any = [];
    useEffect(() => {
        getDocs(collection(db, "groups")).then(g1 => {
            g1.forEach(group => {
                let g2 = group.data()
                g2["id"] = group.id;
                g.push(g2)
            })
            setGroups(g)
        })
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name_en',
            key: 'name',
        },
        {
            title: '名稱 ',
            dataIndex: 'name_zh',
            key: 'name_zh',
        },
    ];

    return (
        <Dashboard>
            <Table dataSource={groups} columns={columns} style={{ padding: "10px" }} pagination={false} />
            <Affix style={{position:'fixed',bottom:30,right:30}}>
                <Button size="large" shape="circle" type="primary" icon={<UserAddOutlined/>} />
            </Affix>
        </Dashboard>
    )
}