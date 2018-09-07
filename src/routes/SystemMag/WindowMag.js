import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Select, Button, Table, Tabs, Card, Tooltip, Icon } from 'antd';
import styles from './windowMag.less';
import WindowModel from '../../components/WindowModel';
import FormModel from '../../components/FormModel';

const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;


// 表格配置描述
const columns = [{
  title: '顺序号',
  dataIndex: 'order',
  key: 'order',
  width: 80,
  align: 'center',
}, {
  title: '名称',
  dataIndex: 'docName',
  key: 'docName',
  width: 180,
  align: 'center',
}, {
  title: '对应的数据表',
  dataIndex: 'dataForm',
  key: 'dataForm',
  width: 220,
  align: 'center',
}, {
  title: '备注',
  dataIndex: 'others',
  key: 'others',
}];

// 表格数据
const data = [{
  key: 1,
  order: 1,
  docName: '公房档案案卷表',
  dataForm: '上海地产公房档案案卷表',
  other: '这是备注',
}, {
  key: 2,
  order: 2,
  docName: '公房档案文件表',
  dataForm: '上海地产公房档案文件表',
  other: '这是备注',
}];

// 表格选中设置
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows:', selectedRows);
  },
  getCheckboxProps: record => ({
    disable: record.name === 'Disabled User',
    name: record.name,
  }),
};




class WindowMag extends React.Component{
//默认弹窗关闭
   state = {
     modalVisible:false,
     formModalVisible:false,
     formDefaultValue:'',
     defaultCode:'请在右上角选择版本号',
     isDisabled:true, //初始禁止按钮
   }

// 版本选择
  handleChange = value => {
    const { dispatch } =this.props;
    if (value > 0) {
      dispatch({
        type: 'windowMag/save',
        payload: {
          versionNo: value,
        },
      });

      this.setState({
        isDisabled: false,  // 版本选择后按钮才可用
      });
      this.setState({
        defaultCode: JSON.stringify(this.props.windowMag.defaultCode)
      });
    }

  };


 // 关闭弹出框,flag2用来识别是否用默认值
  handleModalVisible = (flag1,flag2) => {
     this.setState({
       modalVisible: !!flag1,
     });
     if (flag2){
       this.setState({
         formDefaultValue: JSON.stringify(this.props.windowMag.defaultCode),
       });
     }
     else {
       this.setState({
         formDefaultValue: '',
       });
     }
  };


  // 弹出框确定添加

  handleAdd = fields => {
     this.props.dispatch({
       type: 'windowMag/add',
       payload: {
         formCode: fields.formCode,
       },
     });
  };

  FormModalVisible = (flag) => {
    this.setState({
      formModalVisible: !!flag,
    });
  };

  handleCancel = () => {
    this.setState({
      formModalVisible: false,
    });
  };



  render() {
    // 编辑弹出框相关参数
    const { defaultCode, isDisabled, modalVisible } = this.state;
    const versionNo = this.props.windowMag.versionNo;
    const WindowModelMethods = {
       handleAdd: this.handleAdd,
       handleModalVisible: this.handleModalVisible,
       formDefaultValue: this.state.formDefaultValue,
    };


    // 预览弹出框相关参数
    const formModalProps = {
      visible: this.state.formModalVisible,
      maskClosable: false,
      ctFormStyle:this.props.windowMag.defaultCode.defineLayout,
      data:this.props.windowMag.defaultCode.formElement,
      handleCancel:this.handleCancel,
    };

    const versionSelect = (
      <Select placeholder="请选择版本号" style={{width: 200}} onChange={this.handleChange}>
      <Option value="1.0">1.0</Option>
      <Option value="2.0">2.0</Option>
    </Select>
    );

    // 界面输入窗体内的按钮设置
    const buttonGroup = (
      <div className={styles.ButtonGroup}>
        <Tooltip title="自动生成界面">
          <Button type="primary" icon="retweet" disabled={isDisabled} />
        </Tooltip>
        <Tooltip title="添加界面">
          <Button type="primary" icon="plus-circle-o" disabled={isDisabled} onClick={() => this.handleModalVisible(true, false)} />
        </Tooltip>
        <Tooltip title="修改界面">
          <Button type="primary" icon="form" disabled={isDisabled} onClick={()=>this.handleModalVisible(true, true)} />
        </Tooltip>
        <Tooltip title="预览界面">
          <Button type="primary" icon="scan" disabled={isDisabled} onClick={()=>this.FormModalVisible(true)} />
        </Tooltip>
        <Tooltip title="删除界面">
          <Button type="primary" icon="delete" disabled={isDisabled} />
        </Tooltip>
      </div>
    );


    return (
      <div className={styles.wdMagBox}>
        <div className={styles.wdMagForm}>
          <Form layout="inline">
            <Row gutter={8}>
              <Col xl={6} lg={8} md={6} sm={24} xs={24}>
                <FormItem label="选择全综">
                  <Select
                    value="请选择全综分类"
                  >
                    <Option value="1">西部集团</Option>
                    <Option value="2">上海曹杨物业有限公司</Option>
                    <Option value="3">上海长风物业有限公司</Option>
                  </Select>

                </FormItem>
              </Col>
              <Col xl={8} lg={8} md={6} sm={24} xs={24}>
                <FormItem label="门类归档方式">
                  <Select
                    value="请选择门类归档方式"
                  >
                    <Option value="1">文书档案以卷归档</Option>
                    <Option value="2">公房档案以卷归档</Option>
                    <Option value="3">基建档案以卷归档</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col xl={10} lg={8} md={12} sm={24} xs={24} style={{textAlign: 'right'}}>
                <span>
                  <Button type="primary">新增</Button>
                  <Button type="primary" style={{marginLeft: 8}}>
                    修改
                  </Button>
                  <Button type="danger" style={{marginLeft: 8}}>
                    删除
                  </Button>
                </span>
              </Col>
            </Row>

          </Form>
        </div>
        <div className={styles.wdMagTable}>
          <Table columns={columns} dataSource={data} rowSelection={rowSelection}/>
        </div>
        <div>
          <div className={styles.wdMagOperation}>
            <Tabs type="card">
              <TabPane tab="界面显示字段" key="1">
                <Button type="default" icon="cloud" style={{marginRight: 5}}/>
                <Button type="default" icon="cloud" style={{marginRight: 5}}/>
                <Button type="default" icon="cloud" style={{marginRight: 5}}/>
              </TabPane>
              <TabPane tab="字段规则" key="2">
                2
              </TabPane>

              <TabPane tab="界面输入窗体" key="3">
                <Card
                  title={buttonGroup}
                  bordered={false}
                  className={styles.writeInfo}
                  extra={versionSelect} >
                <div>
                    <p>版本号:{versionNo} </p>
                    <p>窗体代码：{defaultCode}</p>
                  </div>
                </Card>
              </TabPane>

              <TabPane tab="触发器" key="4">
                4
              </TabPane>
              <TabPane tab="门类报表" key="5">
                5
              </TabPane>
              <TabPane tab="验证规则" key="6">
                6
              </TabPane>
            </Tabs>
          </div>
        </div>
        <WindowModel {...WindowModelMethods} modalVisible={modalVisible} />
        <FormModel {...formModalProps} />
      </div>

    );
  }
}



export default connect(({ windowMag }) => ({
  windowMag
}))(WindowMag);











































