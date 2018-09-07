import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;


class MainMenu extends React.Component {
  state = {
    current: 'setting',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="setting">
          <Link to="/systemMag/windowMag"> <Icon type="setting" /> 系统管理</Link>
        </Menu.Item>

        <SubMenu title={<span><Icon type="book" /> 档案管理档案管理档案管理 </span>}>
          <SubMenu key="sub1" title="西部集团">
            <Menu.Item key="sub1doc1">
              <Link to="/DocMag">
                <span>文书档案以卷归档</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="sub1doc2">公房档案以卷归档</Menu.Item>
            <Menu.Item key="sub1doc3">基建档案以卷归档</Menu.Item>
            <Menu.Item key="sub1doc4">设备档案以卷归档</Menu.Item>
            <Menu.Item key="sub1doc5">会计档案以卷归档</Menu.Item>
            <Menu.Item key="sub1doc6">电子档案以卷归档</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="上海西部商发发展有限公司">
            <Menu.Item key="sub2doc1">文书档案以卷归档</Menu.Item>
            <Menu.Item key="sub2doc3">基建档案以卷归档</Menu.Item>
            <Menu.Item key="sub2doc4">设备档案以卷归档</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="上海真如物业有限公司">
            <Menu.Item key="sub3doc1">文书档案以卷归档</Menu.Item>
            <Menu.Item key="sub3doc3">公房档案以卷归档</Menu.Item>
            <Menu.Item key="sub3doc4">设备档案以卷归档</Menu.Item>
            <Menu.Item key="sub3doc4">会计档案以卷归档</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title="上海曹杨物业有限公司">
            <Menu.Item key="sub3doc1">文书档案以卷归档</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title="上海精新建筑装修有限公司">
            <Menu.Item key="sub3doc1">文书档案以卷归档</Menu.Item>
          </SubMenu>
        </SubMenu>

        <Menu.Item key="docUsing">
          <Icon type="search" /> 档案利用
        </Menu.Item>
        <Menu.Item key="processMag">
          <Icon type="profile" /> 流程管理
        </Menu.Item>
        <Menu.Item key="personCenter">
          <Icon type="user" /> 个人中心
        </Menu.Item>
        <Menu.Item key="help">
          <Icon type="question-circle-o" /> 帮助
        </Menu.Item>
      </Menu>
    );
  }

}


export default MainMenu;
