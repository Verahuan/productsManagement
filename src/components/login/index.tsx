import React from 'react'
import {Modal,Form, Input, Button, Checkbox,Space,} from 'antd'
import { Link } from 'umi'
import {TriangleIcon,TriangleReverseIcon,UserInfoIcon,UserLockIcon} from '@/assets/svg'

import styles  from './index.less'
// 改为input

const Login= (props)=>{

  const onFinish = async (values: any) => {
    const count=values.username
    const pass=values.password
    console.log(count,pass)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Modal
        bodyStyle={
          {
            position:'absolute',
            top:64,
            right:70,
            padding:0
          }
        }
        style={{
          height: 480,
          backgroundColor:"#fff",
          boxShadow: "0px 12px 42px rgba(0, 0, 0, 0.12)",
          borderRadius: 8,
        }
        }
        maskStyle={{
          backgroundColor:'#E5E5E5'
        }}
        width={440}
        visible={true}
        centered={true}
        footer={null}
        closable={false}
        maskClosable={false}
        destroyOnClose={true}
      >
        <div>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Space
              size={20}
              direction={'vertical'}
              style={{
                display:'flex',
                alignItems:'center',
                marginBottom:'40px'
              }}>
              <Space
                size={-10}>
                <TriangleIcon/>
                <TriangleReverseIcon/>
              </Space>
              <div className={styles.logo}>LOGO</div>
            </Space>
            <Space direction={'vertical'} size={20}>
              <Form.Item
                name="username"
                className={styles.FormItem}
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input
                  className={styles.InputStyle}
                  prefix={<UserInfoIcon/>}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                className={styles.FormItem}
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  className={styles.InputStyle}
                  prefix={<UserLockIcon/>}
                  placeholder="密码"/>
              </Form.Item>
              <Form.Item
                className={styles.FormItem}
                style={{
                  marginBottom:'40px'
                }}
                name="remember" valuePropName="checked">
                <Checkbox
                  className={styles.CheckStyle}>记住账号</Checkbox>
              </Form.Item>
            </Space>
            <Form.Item
              className={styles.FormItem}
            >
              <Link to={'/'}>
                <Button className={styles.ButtonStyle} type="primary" htmlType="submit">
                  登录
                </Button>
              </Link>

            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default Login
