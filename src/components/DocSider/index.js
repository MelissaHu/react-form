import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Link } from 'dva/router';

const {Sider} = Layout;


const DocSider = () => {

  return (
    <Sider width={160} style={{background: '#fff'}}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{height: '100%'}}
      >
        <Menu.Item key="1">
          <Icon type="home"/>
          <span>全宗管理</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="appstore-o"/>
          <span>分类管理</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="appstore-o"/>
          <span>门类管理</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/systemMag/windowMag">
            <Icon type="windows-o" />
            <span>窗体模型</span>
          </Link>
        </Menu.Item>


      </Menu>
    </Sider>
  );
}


export default DocSider;
