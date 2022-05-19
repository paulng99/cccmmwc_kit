import { DeleteOutlined, EditOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Affix, AutoComplete, Button, Form, Input, Modal, Table } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { ColumnsType } from "antd/lib/table";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import _ from "underscore";
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase";
import canAction from "../../utils/canAction";
import useGroups from "./hooks/useGroups";

export default () => {
    //const [groups, setGroups] = useState<any[]>([]);
    const [visibleModal, setVisibleModal] = useState(false)
    const [loadingOK, setLoadingOK] = useState(false)
    //const [update, setUpdate] = useState(0)
    const [form] = Form.useForm();
    //const [type, setType] = useState<any[]>();
    const [typeFormatted, setTypeFormatted] = useState<any[]>();
    const { pathname } = useLocation()
    const { groups, types, updateGroups, setUpdateGroups } = useGroups();
    const g: any = [];
    /*     useEffect(() => {
            getDocs(collection(db, "groups")).then(g1 => {
                g1.forEach(group => {
                    let g2 = group.data()
                    g2["id"] = group.id;
                    g.push(g2)
                })
                setGroups(g)
                setType(_.keys(_.groupBy(g, "type")))
            })
        }, [update]) */

    useEffect(() => {
        let t: any[] = [];
        types?.forEach((x) => {
            t.push({
                key: x,
                value: x,
                label: x,
                text: x
            })
        })
        setTypeFormatted(t)
    }, [types])


    //Table Configuation   
    const columns: ColumnsType<object> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: "10"
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
            filters: typeFormatted,
            onFilter: (value: any, record: any) => record.type && record.type.startsWith(value),
            filterSearch: true,
        }, {
            title: 'Action ',
            dataIndex: '',
            render: (value, record, index) => {
                return (
                    canAction("delete", pathname) && <ButtonGroup>
                        <Button onClick={() => { handleDelRow(value.id) }} danger size="small" icon={<DeleteOutlined />}></Button>
                        <Button onClick={() => { }} danger size="small" icon={<EditOutlined />}></Button>
                    </ButtonGroup>
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
            setUpdateGroups(updateGroups + 1);
        })
    }

    const handleOKCancel = () => {
        form.resetFields();
        setVisibleModal(false);
        setLoadingOK(false)
    }

    const handleDelRow = (id: any) => {
        deleteDoc(doc(db, "groups", id)).then(() => {
            setUpdateGroups(updateGroups + 1);
        })
    }


    return (
        <Dashboard>
            <Table dataSource={groups} columns={columns} style={{ padding: "10px" }} />
            {canAction("add", pathname) &&
                <><Affix style={{ position: 'fixed', bottom: 30, right: 30 }}>
                    <Button size="large" shape="circle" type="primary" icon={<UsergroupAddOutlined />} onClick={handleClick} />
                </Affix><Modal visible={visibleModal} onOk={handleOK} destroyOnClose={false} okText="Create" onCancel={handleOKCancel} title="Create Group" closable={false} okButtonProps={{ loading: loadingOK, htmlType: "submit" }}>
                        <Form
                            form={form}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            onFinish={handleFinish}
                            onFinishFailed={() => { setLoadingOK(false); }}>
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
                                <AutoComplete options={typeFormatted} />
                            </Form.Item>
                        </Form>
                    </Modal></>}
        </Dashboard>
    )
}