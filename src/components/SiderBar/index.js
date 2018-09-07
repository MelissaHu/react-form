import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import { Link } from 'dva/router';

const {Sider} = Layout;


const SiderBar = () => {

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
        <Menu.Item key="5">
          <Icon type="user" />
          <span>用户管理</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="database"/>
          <span>数据字典</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="appstore"/>
          <span>数据表定义</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="appstore"/>
          <span>菜单设置</span>
        </Menu.Item>
        <Menu.Item key="9">
          <Icon type="appstore"/>
          <span>角色管理</span>
        </Menu.Item>
        <Menu.Item key="10">
          <Icon type="appstore"/>
          <span>系统参数</span>
        </Menu.Item>
        <Menu.Item key="11">
          <Icon type="appstore"/>
          <span>操作日志</span>
        </Menu.Item>
        <Menu.Item key="12">
          <Icon type="appstore"/>
          <span>全局报表</span>
        </Menu.Item>
        <Menu.Item key="13">
          <Icon type="appstore"/>
          <span>路径管理</span>
        </Menu.Item>
        <Menu.Item key="14">
          <Icon type="appstore"/>
          <span>档案统计</span>
        </Menu.Item>
        <Menu.Item key="15">
          <Icon type="appstore"/>
          <span>组织结构</span>
        </Menu.Item>
        <Menu.Item key="16">
          <Icon type="appstore"/>
          <span>职务管理</span>
        </Menu.Item>
        <Menu.Item key="17">
          <Icon type="appstore"/>
          <span>人员管理</span>
        </Menu.Item>
        <Menu.Item key="18">
          <Icon type="appstore"/>
          <span>监管权限</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}


export default SiderBar
