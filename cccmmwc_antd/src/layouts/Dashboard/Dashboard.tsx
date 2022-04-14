import { Layout } from "antd";
import { FC } from "react";
import "./Dashboard.css"

const { Sider, Header, Content } = Layout;

const Dashboard: FC = (prop: any) => {

    return (
        <Layout>
            <Sider breakpoint="md">Left menu</Sider>
            <Content>
                <Header>Header</Header>
                {prop.children}</Content>
            <Sider>Right menu</Sider>
        </Layout>
    );
}

export default Dashboard;