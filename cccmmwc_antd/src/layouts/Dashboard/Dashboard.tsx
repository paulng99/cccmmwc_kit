import { Layout } from "antd";
import { FC } from "react";
import "./Dashboard.css"
const { Header, Content, Sider } = Layout;

const Dashboard: FC = (prop: any) => {
    
    return (
        <>
            <Layout>
                <Header>Helo</Header>
                <Sider>
                    left menu
                </Sider>
                <Content>
                    {prop.children}
                </Content>
                <Sider>
                    right menu
                </Sider>
            </Layout>
        </>
    );
}

export default Dashboard;