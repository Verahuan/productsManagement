import React, { useState } from 'react';
import { Space, Radio, DatePicker, LocaleProvider } from 'antd';
import Card from "@/components/cards"
import Bar from "@/components/chars/Bar"
import Line from "@/components/chars/Line"
import SunSet from "@/components/chars/sunburst"
import {FullNumberSvgIcon,
  CloseNumberSvgSvgIcon,
  WaitCloseNumberSvgIcon,
  FilishedNumberSvgIcon,
  CalendarIcon} from '@/assets/svg'

import styles from './index.less'

import CardShow from "@/components/chars/cardShow"
import zhCN from 'antd/lib/locale-provider/zh_CN';

const { RangePicker } = DatePicker

const BarDate=[100,20,34,56,90,78,30,60,80]

const Statistics=(props)=>{
  const handleSizeChange=()=>{
    console.log("线性表格切换")
  }
  const onPanelChange=()=>{
    //TODO
    console.log("TimeChange")
  }
    return (
    <div
      className={styles.content}>
      <div>
        <Space direction={"vertical"} size={20}>
          <Space size={20}>
            <CardShow
              icon={<FullNumberSvgIcon/>}
              number={1200}
              kind={"总单量"}
            />
            <CardShow
              icon={<CloseNumberSvgSvgIcon/>}
              number={300}
              kind={"已关闭单量"}
            />
            <CardShow
              icon={<WaitCloseNumberSvgIcon/>}
              number={900}
              kind={"未关闭单量"}
            />
            <CardShow
              icon={<FilishedNumberSvgIcon/>}
              number={'25%'}
              kind={"完成率"}
            />
          </Space>
          <Space size={20}>
            <Card width="928px" height="444px" title="订单地域分布">
              <Bar Ydata={BarDate}/>
            </Card>
            <Card width="296px" height="444px" title="各状态订单量">
              <SunSet/>
            </Card>
          </Space>
          <Card width="1244px" height="592px" title="每日订单情况">
            <div>
              <div className={styles.time}>
                <Space>
                  <Radio.Group value={1} onChange={handleSizeChange}>
                    <Radio.Button value="large">最近一周</Radio.Button>
                    <Radio.Button value="default">最近一个月</Radio.Button>
                  </Radio.Group>
                  <Space>
                    <LocaleProvider locale={zhCN}>
                    <RangePicker  className={styles.select} onChange={onPanelChange}/>
                    </LocaleProvider>
                  </Space>
                </Space>

              </div>
              <Space>
                <Line/>
              </Space>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  )
}

export default Statistics
