import React, { useEffect, useState } from "react"
import { Menu } from "antd";
import useMenus from "../../modules/App/hooks/useMenus";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";


export default () => {
    const menus: [] = useMenus();
    const [menuData, setMenuData] = useState<ItemType[]>();
    let m: any[] = [];

    useEffect(() => {
        let menuLocal = JSON.parse(localStorage.getItem("menus")!)
        menuLocal.forEach((ml: any) => {
            m.push({
                "key": Math.random() * 100,
                //"label":<Link to="">{ml.name_zh}</Link>,
                "label": React.createElement(Link,{"to":ml.menu.link},ml.name_en),
                "icon": React.createElement(ml.icon || UserOutlined),
                "children": [{
                    "label": ml.menu.name_en,
                    "key": Math.random() * 100,
                }],
            })
        });
        setMenuData(m)
    }, [menus]);



    return (
        <>
            <Menu items={menuData} mode="inline" />
        </>
    )
}