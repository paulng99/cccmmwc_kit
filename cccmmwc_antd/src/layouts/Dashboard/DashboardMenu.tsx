import React, { ReactElement, useEffect, useState } from "react"
import { Menu } from "antd";
import useMenus from "../../modules/App/hooks/useMenus";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { UserOutlined, CopyOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";


export default () => {
    const menus: [] = useMenus();
    const [menuData, setMenuData] = useState<ItemType[]>(menus);
    let m: any[] = [];

    interface Iitem {
        "key": number,
        "label": ReactElement | string,
        "icon"?: ReactElement,
        "children"?: Iitem[] | null
    }

    const createItem = (data: any) => {
        let subItem: Iitem[] = [];
        if (data.children.length > 0) {
            data.children.forEach((d: any) => {
                subItem.push({
                    "key": Math.random() * 100,
                    "label": React.createElement(Link, { "to": d.menu.link }, d.menu.name_en),
                })
            });
        }

        let item: Iitem = {
            "key": Math.random() * 100,
            "label": React.createElement(Link, { "to": data.menu.link }, data.menu.name_en),
            "icon": React.createElement(data.menu.icon2 || UserOutlined, ""),
            "children": subItem
        };
        return item;
    }

    useEffect(() => {
        let menuLocal = menus || []
        menuLocal.forEach((ml: any) => {
            m.push(
                createItem(ml)
            )
        });
        setMenuData(m)
    }, [menus]);



    return (
        <>
            <Menu items={menuData} mode="inline" />
        </>
    )
}