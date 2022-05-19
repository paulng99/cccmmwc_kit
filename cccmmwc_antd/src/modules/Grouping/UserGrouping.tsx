import { Button, PageHeader, Select, Tag } from "antd"
import { UserInfo } from "firebase/auth"
import { collectionGroup, doc, getDocs, setDoc } from "firebase/firestore"
import { ChangeEventHandler, EventHandler, useEffect, useState } from "react"
import _ from "underscore"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase"
import { decryptDataToString } from "../../utils/encrypto"
import useGroups from "./hooks/useGroups"
import useUserGroups from "./hooks/useUserGroups"

export default () => {
    const { Option } = Select;
    const [userInfo, setUserInfo] = useState<UserInfo>()
    const [functions, setFunctions] = useState<any[]>();
    const { groups, types, updateGroups, setUpdateGroups } = useGroups();
    const {userGroups}=useUserGroups();

    useEffect(() => {
        let f: any[] = [];
        setUserInfo(localStorage.getItem("userInfo") && JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))));

        getDocs(collectionGroup(db, "functions")).then((d) => {
            d.forEach(q => {
                f.push(q.data())
            })
            setFunctions(f);
        })
    }, [])

    const handleGroupChange = (e: any) => {
        console.log(e)
        setDoc(doc(db, "users", "mmw-nty@cccmmwc.edu.hk"), { "groups": e },{merge:true})
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

    return (<Dashboard>
        <PageHeader
            title={userInfo?.displayName}
            subTitle={userInfo?.email}
            avatar={{ src: userInfo?.photoURL, size: "large" }}
            footer={<FunctionsRender />}
        />
    </Dashboard>)
}