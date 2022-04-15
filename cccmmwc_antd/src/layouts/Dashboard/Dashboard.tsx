import { Layout, Menu } from "antd";
import { FC } from "react";
import "./Dashboard.css"
import DashboardMenu from "./DashboardMenu";

const { Sider, Header, Content } = Layout;
const Dashboard: FC = (prop: any) => {

    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider breakpoint="md"><DashboardMenu /></Sider>
                <Content>
                    {prop.children}</Content>
            </Layout>
        </Layout>
    );
}

export default Dashboard;