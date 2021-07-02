import React, { useState } from "react"
import { Drawer, Tag , Space,Table } from "antd"

import styles from './index.less'
import Order from '@/components/task/components/order'

const columns=[
  {
    dataIndex: 'order',
    title:'订单号：E20210113230312093300117',
    key: 'order',
    render:()=>{
      return (
        <Space direction={'vertical'}>
          <Space>
            <span>等待商家发货</span>
            <Tag color="rgba(12, 204, 195, 1)">发货</Tag>
          </Space>
          <span>暂无发货信息</span>
        </Space>
      )
    }
  }
]
const columnsInfo=[
  {
    dataIndex: 'name',
    title:'名称',
    key: 'name',
  },
  {
    dataIndex: 'price',
    title:'单价（元）',
    key: 'price',
  },
  {
    dataIndex: 'number',
    title:'数量',
    key: 'number',
  },
  {
    dataIndex: 'priceAll',
    title:'总计金额',
    key: 'priceAll',
  },

]
const data=[{
  order:"订单号：E20210113230312093300117"
}]

const infoData=[
  {
    name:"订单号：E20210113230312093300117",
    number:90,
    price:35.00,
    priceAll:55
  }]
const ContentShow=(props)=>{

  return (
    <div >
      <Drawer
        title="订单详情"
        placement="right"
        visible={props.visible}
        headerStyle={{
          fontSize: '16px',
          color:"#595959"
        }}
        closable={true}
        mask={false}
        width={1000}
        onClose={props.onClose}
        style={{ marginTop:60}}
      >
        <Space direction={'vertical'} className={styles.content} size={20}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <Space>
            <Space direction={'vertical'} size={8} className={styles.left}>
              <span>收货人信息</span>
              <span>收货人：</span>
              <span>联系电话：</span>
              <span>收货地址：</span>
            </Space>
            <Space direction={'vertical'} size={8} className={styles.right}>
              <span>付款信息：</span>
              <span>实付金额：</span>
              <span>付款时间：</span>
            </Space>
          </Space>
          <Table
            columns={columnsInfo}
            dataSource={infoData}
            pagination={false}
          />
        </Space>
      </Drawer>
    </div>
  )
}

export default ContentShow
