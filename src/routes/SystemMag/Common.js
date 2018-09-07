import React, { Component } from 'react';
import { Layout, Breadcrumb, Icon } from 'antd';
import TopHeader from '../../components/Common/header';
import SiderBar from '../../components/SiderBar'
const { Content } = Layout;


class MainLayout extends React.Component {


  render() {
    return (
      <Layout>
        <TopHeader />
        <Content style={{ padding: '0 15px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
            <Breadcrumb.Item>窗体模型</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '20px 0', background: '#fff' }}>
            <SiderBar />
            <Content style={{ padding: '0 24px', minHeight: 400 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}


export default MainLayout
