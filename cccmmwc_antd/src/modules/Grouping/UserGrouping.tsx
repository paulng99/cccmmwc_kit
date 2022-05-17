import { Button, PageHeader, Select } from "antd"
import { UserInfo } from "firebase/auth"
import { collectionGroup, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase"
import { decryptDataToString } from "../../utils/encrypto"

export default () => {
    const {Option}=Select;
    const [userInfo, setUserInfo] = useState<UserInfo>()
    const [functions, setFunctions] = useState<any[]>();
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

    const FunctionsRender = () => {
        return (<Select mode="multiple" showSearch={true} style={{width:"100%"}}> 
        {functions?.map(f=>{
            return (
                <Option value={f.id}>{f.name_zh}({f.name_en})</Option>
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