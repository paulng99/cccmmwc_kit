import { UserAddOutlined } from "@ant-design/icons";
import { Affix, Button, Form, Input, Modal, Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export default () => {
    const [groups, setGroups] = useState<any>([]);
    const [visibleModal, setVisibleModal] = useState(false)

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

    const handleClick = () => {
        setVisibleModal(!visibleModal)
    }

    const handleOK = () => {
        setVisibleModal(false)
    }

    return (
        <Dashboard>
            <Table dataSource={groups} columns={columns} style={{ padding: "10px" }} pagination={false} />
            <Affix style={{ position: 'fixed', bottom: 30, right: 30 }}>
                <Button size="large" shape="circle" type="primary" icon={<UserAddOutlined />} onClick={handleClick} />
            </Affix>
            <Modal visible={visibleModal} onOk={handleOK} destroyOnClose={false} okText="Create" onCancel={() => { setVisibleModal(false) }} closable={false}>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="名稱">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Dashboard>
    )
}