import React from 'react'
import { Card, Space,Table } from 'antd'
import styles from './index.less'

const Title=()=>{
  return (
    <Space className={styles.order}>
      <span className={styles.orderTitle}>订单号：E20210113230312093300117</span>
      <span>下单时间：2021-01-14 23:03:13 </span>
    </Space>
  )
}
const dataTest= [{
  name:"神彩 养护型燃油宝抑制积炭提升动力 12瓶/24瓶套装",
  price:"35.00",
  number:1,
  operator:"冯标标\n" +
    "18876834666",
  address:"海南省 海口市 美兰区 白龙南路27号成信丽苑B幢604",
  truePrice:"35.00",
  state:"已发货"
}]

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    width:400
  },
  {
    dataIndex: 'price',
    key: 'price',
    width:110
  } , {
    dataIndex: 'number',
    key: 'number',
    width:110
  } ,
  {
    dataIndex: 'operator',
    key: 'operator',
    width:220
  } ,
  {
    dataIndex: 'address',
    key: 'address',
    width: 380
  },
  {
    dataIndex: 'truePrice',
    key: 'truePrice',
    width:200
  },
  {
    dataIndex: 'state',
    key: 'state',
    width:200
  }]

const Order=(props)=>{
  return (
    <div {...props}>
      <Card
        className={styles.card}
        type="inner"
        title={<Title/>}
        extra={<a href="#">查看详情</a>}
      >
        <Table
          columns={props.columns?props.columns:columns}
          dataSource={[props.dataTest]}
          showHeader={false}
          pagination={false}
          className={styles.table}/>
      </Card>
    </div>
  )
}
export default Order
