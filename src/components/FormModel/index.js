import React from 'react';
import { Form, InputNumber, Input, DatePicker, Modal, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const formModal = ({
                 form: { getFieldDecorator },
                 ...modalProps,
                 handleCancel,
                 ctFormStyle = {},
                 data = '',
               }) => {


  const modalOpts = {
    ...modalProps,
    onCancel: handleCancel,
    ...data,
  };

  const formItemLayout = ctFormStyle.formItemLayout;

  function switchItem(item) {
    const type = item.type;
    switch (type) {
      case 'num':
        return <InputNumber style={{ width: '100%' }} />
        break;
      case 'char':
        return <Input />;
        break;
      case 'date':
        return <DatePicker style={{ width: '100%' }} />
        break;
      case 'select':
        return (
          <Select style={{ width: '100%' }} >
            {item.options.map((option, index) => {
              return (
                <Option key={index} value={option}>
                  {option}
                </Option>
              );
            })}
          </Select>
        );
      default:
        return <Input />;
        break;
    }
  }


  return (
    <Modal {...modalOpts} title="欢迎进入预览界面" width={ctFormStyle.modelWidth} footer={null}>
      <Form layout={ctFormStyle.formStyle}>
        {data.map((item, index) => {
          return (
            <FormItem key={index} {...formItemLayout} label={item.text} style={item.styles}>
              {getFieldDecorator(item.field, {
                rules: item.rules,
              })(switchItem(item))}
            </FormItem>
          );
        })}
      </Form>
    </Modal>
  );
};

export default Form.create()(formModal);
