import { DeleteOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Affix, Button, Form, Input, Modal, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import _ from "underscore";
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";

export default () => {
    const [groups, setGroups] = useState<any>([]);
    const [visibleModal, setVisibleModal] = useState(false)
    const [loadingOK, setLoadingOK] = useState(false)
    const [update, setUpdate] = useState(0)
    const [form] = Form.useForm();
    const [type, setType] = useState([]);

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
    }, [update])

    //Table Configuation   
    const columns: ColumnsType<object> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: "10%"
        },
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
        {
            title: 'Type ',
            dataIndex: 'type',
            key: 'type',
            filters: [
                { text: "Committee", value: "Committee" },
                { text: "Subject", value: "Subject" },
            ],
            onFilter: (value: any, record: any) => record.type && record.type.startsWith(value),
            filterSearch: true,
        }, {
            title: 'Action ',
            dataIndex: '',
            render: (value, record, index) => {
                return (
                    <>
                        <Button onClick={() => { handleDelRow(value.id) }} danger size="small" icon={<DeleteOutlined />}></Button>
                    </>
                )
            }
        },
    ];

    //Handle Function
    const handleClick = () => {
        setVisibleModal(!visibleModal)
    }

    const handleOK = () => {
        setLoadingOK(true)
        form.submit();
    }

    const handleFinish = (values: any) => {
        addDoc(collection(db, "groups"), values).then(() => {
            handleOKCancel();
            setUpdate(update + 1);
        })
    }

    const handleOKCancel = () => {
        form.resetFields();
        setVisibleModal(false);
        setLoadingOK(false)
    }

    const handleDelRow = (id: any) => {
        console.log(id)
        deleteDoc(doc(db, "groups", id)).then(() => {
            setUpdate(update + 1);
        })
    }


    return (
        <Dashboard>
            <Table dataSource={groups} columns={columns} style={{ padding: "10px" }} />
            <Affix style={{ position: 'fixed', bottom: 30, right: 30 }}>
                <Button size="large" shape="circle" type="primary" icon={<UsergroupAddOutlined />} onClick={handleClick} />
            </Affix>
            <Modal visible={visibleModal} onOk={handleOK} destroyOnClose={false} okText="Create" onCancel={handleOKCancel} closable={false} okButtonProps={{ loading: loadingOK, htmlType: "submit" }}>
                <Form
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleFinish}
                    onFinishFailed={() => { setLoadingOK(false) }}>
                    <Form.Item label="Name" name='name_en' rules={[{
                        required: true,
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="名稱" name="name_zh" required={true} rules={[{
                        required: true,
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Type" name="type" required={true} rules={[{
                        required: true,
                    }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Dashboard>
    )
}