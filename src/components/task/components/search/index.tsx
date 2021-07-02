import React from 'react'
import { Input, Select} from 'antd'
import styles from './index.less'
const {Option}=Select
const optionList=[
  "E20210113230312093300117",
  "E20210113230312093300119",
  "E20210113230312093300110"]

const SearchOrder=()=>{
  return(
    <Input.Group compact className={styles.search}>
      <Select defaultValue="订单编号" className={styles.select} style={{
        width:'100px'
      }}>
        {optionList.map((item)=> <Option value={item}>{item}</Option>)
        }
      </Select>
      <Input  defaultValue="请输入" className={styles.input}/>
    </Input.Group>
  )
}
export default SearchOrder
