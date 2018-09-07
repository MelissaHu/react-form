import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import styles from './MainPage.less';
import SystemMag from '../components/SystemMag';
import TopHeader from '../components/Common/header';


const {Footer, Content } = Layout;

class MainLayout extends React.Component {

  render() {

    return (
      <div className={styles.container}>
        <Layout>
          <TopHeader />
          <Content className={styles.content}>
            <SystemMag/>
          </Content>

          <Footer className={styles.footer}>兰台信息技术有限公司</Footer>
        </Layout>
      </div>
    );
  }

}


export default MainLayout
