import React from "react"
import { Table ,Tabs } from 'antd'
import styles from './index.less'
import UsersManagement from "@/pages/components/manage/user"
import StateManagement from "@/pages/components/manage/state"
import PriorManagement from "@/pages/components/manage/prior"
import FullManage from "@/pages/components/manage/full"

const { TabPane } = Tabs
const callback=()=>{
  console.log("zhh")
}
const tabBarStyle={
  color:'#595959'
}
const Manage=()=>{
  return(
    <Tabs defaultActiveKey="1" onChange={callback} className={styles.tab} tabBarStyle={tabBarStyle}>
      <TabPane tab="全部" key="1" >
        <FullManage/>
      </TabPane>
      <TabPane tab="销售中" key="2">
        <StateManagement/>
      </TabPane>
      <TabPane tab="已售罄" key="3">
        <StateManagement/>
      </TabPane>
      <TabPane tab="仓库中" key="4">
        <StateManagement/>
      </TabPane>
    </Tabs>
  )
}
export default Manage
