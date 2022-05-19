import { Button, Form, Input, PageHeader, Select, Tag } from "antd"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { useState } from "react"
import _ from "underscore"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase"
import useGroups from "./hooks/useGroups"
import useUserGroups from "./hooks/useUserGroups"

export default () => {
    const { Option } = Select;
    const [userInfo, setUserInfo] = useState<any>()
    const { groups, types } = useGroups();
    const { userGroups, setEmail } = useUserGroups();
    const [form] = Form.useForm()


    const handleGroupChange = (e: any) => {
        console.log(e)
        setDoc(doc(db, "users", userInfo.email), { "groups": e }, { merge: true })
    }

    const handleSearchEmail = (e: any) => {
        console.log(e)
        setEmail(e.email)
        setUserInfo(null);
        let q = query(collection(db, "users"), where("email", "==", e.email))
        getDocs(q).then((d) => {
            d.forEach(d1 => {
                setUserInfo(d1.data())
                console.log(d1.data())
            })
        })
    }

    const FunctionsRender = () => {
        return (<Select mode="multiple" showSearch={true} style={{ width: "100%" }} onChange={handleGroupChange} defaultValue={userGroups}>
            {groups?.map(g => {
                return (
                    // <Option value={f.id}>{f.name_zh}({f.name_en})</Option>
                    <Option value={g.id}>{g.name_zh}</Option>
                )
            })}
        </Select>)
    }

    return (
        <Dashboard>
            <Form form={form} layout={"inline"} onFinish={handleSearchEmail} >
                <Form.Item name="email" label="Email:"><Input /></Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>
            {userInfo && <PageHeader
                title={userInfo?.name}
                subTitle={userInfo?.email}
                avatar={{ src: userInfo?.photoURL, size: "large" }}
                footer={<FunctionsRender />}
            />}
        </Dashboard>
    )
}