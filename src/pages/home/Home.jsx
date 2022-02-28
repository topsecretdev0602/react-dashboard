import React from 'react'
import "./home.css"

import { salesData } from "../../dashboardData";

import InfoWidget from '../../components/info-widget/InfoWidget';
import Chart from '../../components/chart/Chart';
import UserWidget from '../../components/user-widget/UserWidget';
import TransactionWidget from '../../components/transaction-widget/TransactionWidget';

export default function Home() {
  return (
    <div className="home">
      <InfoWidget/>
      <Chart data={salesData} title="Sales (US$)" grid dataKey="Sales"/>
      <div className="listWidgets">
        <UserWidget/>
        <TransactionWidget/>
      </div>
    </div>
  )
}
