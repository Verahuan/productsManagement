
import { Tabs,Space } from 'antd'

import {useState} from 'react'
import styles from "./index.less"
import React from 'react'
import zhCN from "antd/lib/locale-provider/zh_CN"
import TableSelect from "@/components/selection"
import ContentShow from "@/components/Drawer"
import SearchOrder from '@/components/task/components/search'
import OrderHeader from '@/components/task/components/orderHeader'
import Order from '@/components/task/components/order'

const { TabPane } = Tabs

const data=[]
for(let i=0;i<10;i++){
  data.push(
    {
      name:"神彩 养护型燃油宝抑制积炭提升动力 12瓶/24瓶套装",
      price:"35.00",
      operator:"冯标标\n" +
        "18876834666",
      number:i,
      address:"海南省 海口市 美兰区 白龙南路27号成信丽苑B幢604",
      truePrice:"35.00",
      state:"已发货"
    }
  )
}

const TagsManagement=()=>{
  const [isVisible,changeVisibility]=useState(false)
  const [hasSelected, hasSelectedChange] = useState(false)
  const [selectedKey, selectedKeyChange] = useState(false)

  const IsShowDrawer=()=>{
    changeVisibility(!isVisible)
    console.log(isVisible,"isAfter")
  }
  const Sample=()=>{
    // TODO 根据数据不同进行渲染，目前先用示例数据进行展示
    return (
      <div>
        <Space size={20} direction={"vertical"}>
          <SearchOrder/>
          <OrderHeader/>
        </Space>
        <Space size={16} direction={'vertical'}>
          {
            data.map((item,index)=>{
              console.log(item,index)
              return (
                <div onClick={IsShowDrawer}>
                  <Order dataTest={item} className={styles.order}/>
                </div>
              )
            })
          }
        </Space>
        <br/>
      </div>
    )
  }
  return (
    <div >
      <ContentShow visible={isVisible} data={{}} onClose={IsShowDrawer}/>
      <Tabs defaultActiveKey="1" className={styles.task}>
        <TabPane tab="全部" key="1" className={styles.tab}>
          <Space size={20} direction={"vertical"}>
            <SearchOrder/>
            <OrderHeader/>
          </Space>
          <Space size={16} direction={'vertical'}>
            {
              data.map((item,index)=>{
                console.log(item,index)
                return (
                  <div onClick={IsShowDrawer}>
                    <Order dataTest={item} className={styles.order}/>
                  </div>
                )
              })
            }
          </Space>
          <br/>
        </TabPane>
        <TabPane tab="待付款" key="2">
          <Sample/>
        </TabPane>
        <TabPane tab="代发货" key="3">
          <Sample/>
        </TabPane>
        <TabPane tab="已发货" key="4">
          <Sample/>
        </TabPane>
        <TabPane tab="已完成" key="5">
          <Sample/>
        </TabPane>
        <TabPane tab="已关闭" key="6">
          <Sample/>
        </TabPane>
        <TabPane tab="售后中" key="6">
          <Sample/>
        </TabPane>
      </Tabs>
    </div>
  )
}
export default TagsManagement
