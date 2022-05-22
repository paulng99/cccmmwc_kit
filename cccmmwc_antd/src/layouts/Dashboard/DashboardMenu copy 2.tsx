import React, { ReactElement, useEffect, useState } from "react"
import type { MenuProps } from 'antd';
import { Menu } from "antd";
import { UserOutlined, CopyOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import { decryptDataToString } from "../../utils/encrypto";

export default () => {
    const menus: [] = JSON.parse(localStorage.getItem("menus") || "[]");
    const [items, setItems] = useState<MenuItem[]>([])

    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    useEffect(() => {
        console.log("menus: ",menus)
        const x:any[]=[]
        menus.forEach((m:any) => {
            x.push(getItem(m.menu.name_en, m.id,"",[
                m.chidlren?.forEach((sub:any)=>{
                    getItem(sub.sub.name_en, sub.id)
                })
            ]))
        })
        setItems(x)
    }, [])


    return (
        <>
            <Menu mode="inline" items={items} />
        </>
    )
} 