import { collectionGroup, DocumentData, getDocs, waitForPendingWrites } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../services/firebase";
import { ApiOutlined, IeOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from "antd";


export default () => {
    const [menuData, setMenuData] = useState<DocumentData[]>();

    useEffect(
        () => {
            const dataArray: DocumentData[] = [];
            const menuQuery = collectionGroup(db, "menus");
            getDocs(menuQuery).then(d => {
                d.forEach(dd => {
                    dataArray.push(dd.data());
                })
                setMenuData(dataArray);
            })
        }, []);

    return (
        <>  
            <Menu>
                {menuData?.map(menu =>
                    <>
                        <Menu.Item icon={null} key={menu.menu_id} itemIcon={<ApiOutlined />}>{menu.menu_id}</Menu.Item>
                    </>
                )}

                {/* <Menu mode="inline">
            <Menu.SubMenu title="Navigation 1" icon={<MailOutlined />}>
                <Menu.Item icon={null}>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
                <Menu.Item>Item 1</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Navigation 2" icon={<IeOutlined />}>
                <Menu.Item>Item 2</Menu.Item>
                <Menu.Item>Item 2</Menu.Item>
                <Menu.Item>Item 2</Menu.Item>
                <Menu.Item>Item 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Navigation 3" icon={<ApiOutlined />}>
                <Menu.Item>Item 3</Menu.Item>
                <Menu.Item>Item 3</Menu.Item>
                <Menu.Item>Item 3</Menu.Item>
                <Menu.Item>Item 3</Menu.Item>
            </Menu.SubMenu>
        </Menu> */}
            </Menu>
        </>
    )
}