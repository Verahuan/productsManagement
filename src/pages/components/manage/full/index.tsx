import React from "react"
import StateManagement from "@/pages/components/manage/state"

const originData: any[] = []
for (let i = 0; i < 46; i++) {
  originData.push({
    key: i,
    name: i % 2 ? '电动风扇' : '石墨烯',
    describe: i % 2 ? '新键' : '设计中',
    price:i*3,
    state: i % 2 ? '销售中' : '已售罄',
    number:i*10,
    time:"2021",
    sale:i % 2 ? "true" : "false",
    operation: 'delete',
  })
}

const KindsManage=()=>{
  return(
    <StateManagement data={originData}/>
  )
}
export default KindsManage
