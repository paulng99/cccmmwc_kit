import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import _ from "underscore";
import { db } from "../../../services/firebase"

export default ()=>{
    const [groups, setGroups] = useState<any[]>([]);
    const [types, setTypes] = useState<any[]>();
    const [updateGroups, setUpdateGroups] = useState(0)

    const g: any = [];

    useEffect(() => {
        getDocs(collection(db, "groups")).then(g1 => {
            g1.forEach(group => {
                let g2 = group.data()
                g2["id"] = group.id;
                g.push(g2)
            })
            setGroups(g)
            setTypes(_.keys(_.groupBy(g, "type")))
        })
    }, [updateGroups])
    return {groups, types, updateGroups, setUpdateGroups}
}