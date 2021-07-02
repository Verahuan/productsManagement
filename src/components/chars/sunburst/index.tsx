import React from "react"
import {useEffect} from "react"
import * as echarts from 'echarts/lib/echarts'
import {Space} from 'antd'

import { TooltipComponent } from 'echarts/components'
import { SunburstChart } from 'echarts/charts'
import { LegendComponent } from 'echarts/components'

echarts.use([LegendComponent])
echarts.use([TooltipComponent])
echarts.use([SunburstChart])


const data=[{
  children: [{
    name: '待付款',
    tooltip:{
      trigger: 'item',
    },
    value: 3,
    itemStyle:{
      color:'rgba(120, 229, 220, 1)'
    }
  }, {
    name: '代发货',
    value: 5,
    tooltip:{
      trigger: 'item',
    },
    itemStyle:{
      color:'rgba(255, 138, 138, 1)'
    }
  },{
    name: '已关闭',
    value: 6,
    tooltip:{
      trigger: 'item',
    },
    itemStyle:{
      color:'rgba(255, 200, 138, 1)'
    }
  },{
    name: '已发货',
    value: 7,
    tooltip:{
      trigger: 'item',
    },
    itemStyle:{
      color:'rgba(200, 158, 255, 1)'
    }
  },{
    name: '已完成',
    value: 4,
    tooltip:{
      trigger: 'item',
    },
    itemStyle:{
      color:'rgba(133, 198, 255, 1)'
    }
  },{
    name: '售后中',
    value: 3,
    tooltip:{
      trigger: 'item',
    },
    itemStyle:{
      color:'rgba(114, 229, 247, 1)'
    },
  }]
}]

const option = {
  grid: {
    left: 0,
    right: 0,
    top:0,
    bottom: 0,
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  series: {
    type: 'sunburst',
    emphasis: {
      focus: 'ancestor'
    },
    highlightPolicy: 'descendant',
    nodeClick:false,
    levels: [
      {

      },
      {
        // 最靠内测的第一层
        itemStyle: {
          color: 'white'
        },
        label: {
          color: 'blue'
        }
      },
      {
        // 第二层 ...
      }
    ],
    data,
    radius: [0, '90%'],
    label: {
      show: false,
    }
  }
}
const Circle=(props)=>{
  return (
    <Space
      size={8} style={{
        width:'64px',
        marginBottom:'12px'
      }}>
      <div style={{
        width:8,
        height:8,
        borderRadius:'50%',
        backgroundColor:props.color
      }}>
      </div>
      <div style={{
        fontSize:'12px',
        color:'#595959',
        height:'18px',
        lineHeight:'18px'
      }}>{props.title}</div>
    </Space>
  )
}
const SunSet=(props)=>{
  useEffect(()=>{
    const myChart = echarts.init(document.getElementById('myChart1'))
    myChart.setOption(option)
  }, [])
  return (
    <div>
      <div id='myChart1' style={{ width: 190, height: 190}} >
      </div>
      <div>
        <div style={{
          padding:8,
          width:190
        }}>
          <Space size={32}>
            <Circle color='rgba(120, 229, 220, 1)' title="待付款"/>
            <Circle color='rgba(255, 138, 138, 1)' title="已关闭"/>
          </Space>
          <Space size={32}>
            <Circle color='rgba(255, 200, 138, 1)' title="代发货"/>
            <Circle color='rgba(200, 158, 255, 1)' title="已发货"/>
          </Space>
          <Space size={32}>
            <Circle color='rgba(133, 198, 255, 1)' title="已完成"/>
            <Circle color='rgba(114, 229, 247, 1)' title="售后中"/>
          </Space>

        </div>
      </div>
    </div>
  )
}

export default SunSet
