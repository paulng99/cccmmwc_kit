import { PageHeader } from "antd"
import { UserInfo } from "firebase/auth"
import { collectionGroup, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Dashboard from "../../layouts/Dashboard/Dashboard"
import { db } from "../../services/firebase"
import { decryptDataToString } from "../../utils/encrypto"

export default () => {
    const [userInfo, setUserInfo] = useState<UserInfo>()
    const [functions, setFunctions] = useState();
    useEffect(() => {
        let f:any[]=[];
        setUserInfo(localStorage.getItem("userInfo") && JSON.parse(decryptDataToString(localStorage.getItem("userInfo"))));

        getDocs(collectionGroup(db,"functions")).then((d)=>{
            d.forEach(q=>{
               f.push(q.data())
            })
            setFunctions(f);
        })

    }, [])

    const FunctionsRender=()=>{
        return (<>function list</>)
    }

    return (<Dashboard>
        {console.log(userInfo)}
        <PageHeader
            title={userInfo?.displayName}
            subTitle={userInfo?.email}
            avatar={{src:userInfo?.photoURL,size:"large"}}
            footer={<FunctionsRender />}
        />
    </Dashboard>)
}