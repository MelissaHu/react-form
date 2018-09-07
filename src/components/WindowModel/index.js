import React from 'react';
import { Form, Modal, Input } from 'antd';


const FormItem = Form.Item;
const { TextArea } = Input;


const WindowModel = ({ modalVisible, formDefaultValue, form, handleAdd, handleModalVisible }) => {

  const okHandle= () =>{
     form.validateFields((err, fieldsValue) =>{
       //可以在这里验证表单里面要输入的东西是否是JSON数据
       if(err) return;
       form.resetFields();
       handleAdd(fieldsValue);
     });
  };



  return(
    <Modal
      title="请在下面输入编辑代码"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={()=>handleModalVisible()}
      maskClosable={false}
    >
      <Form>
        <FormItem>
          {form.getFieldDecorator('formCode',{
            rules:[{ required:true,message:'请输入编辑代码' }],
            initialValue: formDefaultValue,
          })(<TextArea rows={20} />)}
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(WindowModel);
