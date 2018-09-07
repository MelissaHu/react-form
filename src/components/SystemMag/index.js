import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

export default class SystemMag extends Component {
  render() {
    return (
      <div>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                <Link to="/">
                  <Icon type="appstore" style={{ color: '#8FC9FB' }} />
                  <span>全宗管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                <Link to="/">
                  <Icon type="appstore" style={{ color: '#FF8C00' }} />
                  <span>分类管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  <Icon type="appstore" style={{ color: '#D897EB' }} />
                  <span>门类管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/systemMag/windowMag">
                  <Icon type="appstore" style={{ color: '#64EA7C' }} />
                  <span>窗体模式</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                <Link to="/">
                  <Icon type="appstore" style={{ color: '#F69999' }} />
                  <span>用户管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                <Link to="/">
                  <Icon type="appstore" style={{ color: '#DAA520' }} />
                  <span>数据字典</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#8FC9FB' }} />
                  <span>数据表定义</span>
                </Link>{' '}
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#FF8C00' }} />
                  <span>菜单设置</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#D897EB' }} />
                  <span>角色管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#64EA7C' }} />
                  <span>系统参数</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#F69999' }} />
                  <span>操作日志</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#DAA520' }} />
                  <span>全局报表</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#8FC9FB' }} />
                  <span>全文路径管理</span>
                </Link>{' '}
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#FF8C00' }} />
                  <span>档案统计</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#D897EB' }} />
                  <span>组织结构</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#64EA7C' }} />
                  <span>职务管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#F69999' }} />
                  <span>人员管理</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="appstore" style={{ color: '#DAA520' }} />
                  <span>监管权限</span>
                </Link>
              </div>
            </Col>
            <Col className={styles.ColBox} xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className={styles.box} style={{ background: '#fefefe' }}>
                {' '}
                <Link to="/">
                  {' '}
                  <Icon type="plus-square-o" style={{ color: '#DAA520' }} />
                  <span>添加分类</span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
