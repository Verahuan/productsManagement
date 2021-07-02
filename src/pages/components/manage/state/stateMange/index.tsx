import React,{useState} from "react"
import styles from './index.less'
import { Button, Input, Space,Modal,Form, Select } from "antd"

const { Option } = Select;

const ADDState=(props)=>{
  const [form] = Form.useForm()
  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' })
        return
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' })
        return
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' })
    }
  }
  const submit=()=>{
    // TODO
    props.ModalChange()
    // 提交新添加数据
  }
  const cancel=()=>{
    // TODO
    // 取消model显示
    props.ModalChange()
  }
  return (
    <Modal
      visible={props.isModalVisible}
      zIndex={100}
      title="添加商品"
      onOk={submit}
      onCancel={cancel}
    >
      <Form form={form} name="control-hooks">
        <Form.Item name="商品名称" label="商品名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="描述" label="描述" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="商品类目" label="商品类目" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="价格" label="价格" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="库存" label="库存" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>

    </Modal>
  )
}

export default ADDState
