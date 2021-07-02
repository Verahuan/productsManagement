import React, { useState } from 'react'
import { Layout, Menu,Space } from 'antd'
import { history } from 'umi'

import styles from './index.less'
import { Link } from 'umi'

import  {
  TriangleIcon,
  TriangleReverseIcon,
} from '@/assets/svg'
import Manage from '@/pages/components/manage'
import Statistics from '@/pages/components/Statistics'
import TagsManagement from '@/components/task'

const { Header, Content,Sider } = Layout
let curr="商品管理"


const SiderLayout = () => {
  const [newCurr,changeCurr]=useState(curr)

  function Notification() {
    switch (history.location.hash) {
      case '#manage':
      {changeCurr("商品管理")
        return  <Manage/>}
      case '#order':
      {changeCurr("订单管理")
        return <TagsManagement/>}
      case '#analyze':
      {changeCurr("订单分析")
        return  <Statistics/>}
      default:
      {changeCurr("商品管理")
        return  <Manage/>}
    }
  }
  return (
    <Layout>
      <Sider
        className={styles.sider}
        width={216}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className={styles.left}>
          <Link to="/" >
            <Space align="center" size={8} className={styles.logo} >
              <Space size={-10} align="start" >
                <TriangleIcon/>
                <TriangleReverseIcon/>
              </Space>
              <div
                className="logoText"
              >Logo
              </div>
            </Space>
          </Link>
        </div>
        <div>
          <Menu theme="dark" mode="inline" className={styles.menu}>
            <div className={styles.menuText}>店铺管理</div>
            <Menu.Item key="1" className={styles.menuItem}>
              <a href={`#manage`}>
                商品管理
              </a>
            </Menu.Item>
            <Menu.Item key="2" className={styles.menuItem}>
              <a href={`#order`}>
                订单管理
              </a>
            </Menu.Item>
            <div className={styles.menuText}>数据中心</div>
            <Menu.Item key="3" className={styles.menuItem}>
              <a href={`#analyze`}>
                订单分析
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header
          className={styles.header}
        >{newCurr}
        <Link to={'./login'}>
          <div className={styles.login}>登录</div>
        </Link>

        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24}}
          >
            <Notification/>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default SiderLayout
