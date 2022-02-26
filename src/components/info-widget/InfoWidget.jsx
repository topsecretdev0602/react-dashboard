import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import "./infoWidget.css"

export default function InfoWidget() {
  return (
    <div className="widget">
        <div className="widgetItem">
            <span className="widgetTitle">Revenue</span>
            <div className="widgetMoneyContainer">
                <span className="widgetMoney">$25,124</span>
                <span className="widgetMoneyRate">
                    +5.4 <ArrowUpward className="widgetIcon"/>
                </span>
            </div>
            <span className="widgetSubTitle">Month over Month</span>
        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Sales</span>
            <div className="widgetMoneyContainer">
                <span className="widgetMoney">$34,654</span>
                <span className="widgetMoneyRate">
                    -1.4 <ArrowDownward className="widgetIcon negative"/>
                </span>
            </div>
            <span className="widgetSubTitle">Month over Month</span>
        </div>
        <div className="widgetItem">
            <span className="widgetTitle">Expenses</span>
            <div className="widgetMoneyContainer">
                <span className="widgetMoney">$10,500</span>
                <span className="widgetMoneyRate">
                    -2.2 <ArrowUpward className="widgetIcon"/>
                </span>
            </div>
            <span className="widgetSubTitle">Month over Month</span>
        </div>        
    </div>
  )
}
