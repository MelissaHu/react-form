
const state = () => ({
  defaultCode: {
    defineLayout: {
      modelWidth: 680,
      formStyle: 'horizontal',
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      },
    },
    formElement: [
      {
        field: 'dm_no',
        text: '流水号',
        type: 'num',
        max: 400,
        min: 0,
        rules: [],
        styles: {},
      },
      {
        field: 'mk_startDay',
        text: '编制起始日期',
        type: 'date',
        rules: [],
        styles: {},
      },
      {
        field: 'file_title',
        text: '案卷标题',
        type: 'char',
        styles: {},
        rules: [{required: true, message: '必填'}],
      },
      {
        field: 'mk_endDay',
        text: '编制结束日期',
        type: 'date',
        rules: [],
        styles: {},
      },
      {
        field: 'keep_deadline',
        text: '保管期限',
        type: 'select',
        options: ['长久', '暂时', '永远'],
        rules: [],
        styles: {},
      },
    ],
  },
  versionNo: '无',
});


export default {
  namespace: 'windowMag',
  state: state(),

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },


  reducers: {
    save(state, action) {
      state.versionNo = action.payload.versionNo;
      return { ...state };
    },

    add(state, action){
      console.log(action.payload);
       return { ...state };
    }
  },

};
