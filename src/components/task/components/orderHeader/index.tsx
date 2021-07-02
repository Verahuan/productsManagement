import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.less'

const OrderHeader=()=>{
  return (
    <Row className={styles.header}  wrap={false}>
      <Col flex="400px" className={styles.headerCol}>商品</Col>
      <Col flex="110px" className={styles.headerCol}>单价(元)</Col>
      <Col flex="110px" className={styles.headerCol}>数量</Col>
      <Col flex="220px" className={styles.headerCol}>收货人</Col>
      <Col flex="380px" className={styles.headerCol}>收货地址</Col>
      <Col flex="200px" className={styles.headerCol}>实收金额</Col>
      <Col flex="200px" className={styles.headerCol}>订单状态</Col>
    </Row>
  )
}
export default OrderHeader
