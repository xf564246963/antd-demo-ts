import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import "./App.css";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <section id="components-layout-demo-custom-trigger">
                <Layout style={{ height: "100%" }}>
                    <Sider
                        trigger={null}
                        collapsible={true}
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle.bind(this)}
                            />
                        </Header>
                        <Content style={{ background: '#fff'}}>
                            Content
                    </Content>
                    </Layout>
                </Layout>
            </section>
        );
    }
}


export default SiderDemo;