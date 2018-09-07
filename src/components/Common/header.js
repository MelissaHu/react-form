import React from 'react';
import {Layout} from 'antd';
import styles from './header.less';
import MainMenu from '../MainMenu';

const {Header} = Layout;


const TopHeader = () => {


  return (
    <Header className={styles.header}>
      <div className={styles.ImgLogo}>这是背景图片</div>
      <MainMenu/>
    </Header>
  )


}


export  default  TopHeader
