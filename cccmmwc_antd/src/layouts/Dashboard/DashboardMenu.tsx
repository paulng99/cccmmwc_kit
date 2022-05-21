import React, { ReactElement, useEffect, useState } from "react"
import type { MenuProps } from 'antd';
import { Menu } from "antd";
import { UserOutlined, CopyOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";

export default () => {
    const menus: [] = JSON.parse(localStorage.getItem("menus") || "[]");
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        items?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            items,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuProps['items'] = []

    return (
        <>
            <Menu mode="inline" items={items} />
        </>
    )
} 